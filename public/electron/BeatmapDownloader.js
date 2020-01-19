const { lstatSync, existsSync } = require('fs');
const { normalize, join } = require('path');
const { app, ipcMain } = require('electron');
const { performance } = require('perf_hooks');
const { makeDownloadUrl, readableBits } = require('./helpers');
const isOnline = require('./helpers/isOnline');

// BeatmapDownloader register to the app window
// It handles all beatmaps downloads and provide a queue system for them,
// it is interfaced with the renderer thread via ipc channels
// and listen to the will-download session event to know when we want to download a something.

class BeatmapDownloader {
  constructor() {
    this.winRef = null;
    this.savePath = null;
    this.currentDownload = { item: null, beatmapSetInfos: { beatmapSetId: null, uniqId: null, beatmapSetInfos: null } };
    this.queue = new Set();
    this.retryInterval = 3500;
  }

  register = win => {
    if (this.winRef) return;

    this.winRef = win;
    this.sendToWin = (channel, args) => win.webContents.send(channel, args);
    this.winRef.webContents.session.on('will-download', this.onWillDownload.bind(this));

    ipcMain.on('download-beatmap', (_event, args) => this.pushToQueue(args));
    ipcMain.on('cancel-current-download', this.cancelCurrent);
    ipcMain.on('pause-resume-current-download', this.pauseResumeCurrent);
    ipcMain.on('cancel-download', (_event, beatmapSetId) => this.cancel(beatmapSetId));
    ipcMain.on('set-beatmap-save-folder', (_event, path) => this.setSavePath(path));
    ipcMain.on('clear-download-queue', this.clearQueue);
    this.sendToWin('ready');
  };

  setSavePath(path) {
    const validPath = normalize(path);

    if (existsSync(validPath) && lstatSync(validPath).isDirectory()) this.savePath = validPath;
    else throw new Error('InvalidPath');
  }

  addToQueue(item) {
    let alreadyExist;
    this.queue.forEach(queueItem => {
      if (queueItem.beatmapSetId === item.beatmapSetId) alreadyExist = true;
    });
    if (alreadyExist) return;
    this.queue.add(item);
    this.sendToWin('queue-updated', { queue: Array.from(this.queue) });
  }

  deleteFromQueue(item) {
    const deleted = this.queue.delete(item);
    this.sendToWin('queue-updated', { queue: Array.from(this.queue) });
    return deleted;
  }

  clearQueue = () => {
    this.queue.clear();
    this.cancelCurrent();
    this.sendToWin('queue-updated', { queue: Array.from(this.queue) });
  };

  setCurrentDownloadBeatmapInfos(beatmapSetInfos) {
    if (this.currentDownload.item) {
      const beatmapSetId = this.currentDownload.item.getURLChain()[0].split('/')[4];
      if (beatmapSetInfos.beatmapSetId !== beatmapSetId) {
        throw new Error('currentDownloadIdMissmatch');
      }
    }
    this.currentDownload.beatmapSetInfos = beatmapSetInfos;
  }

  setCurrentDownloadItem(item) {
    if (this.currentDownload.beatmapSetInfos.beatmapSetId) {
      const beatmapSetId = item.getURLChain()[0].split('/')[4];

      if (this.currentDownload.beatmapSetInfos.beatmapSetId.toString() !== beatmapSetId) {
        throw new Error('currentDownloadIdMissmatch');
      }
    }
    this.currentDownload.item = item;
  }

  clearCurrentDownload(skip) {
    const downloadState = this.currentDownload.item && this.currentDownload.item.getState();
    if ((downloadState === 'progressing' || downloadState === 'interrupted') && !skip) {
      throw new Error('downloadNotStopped');
    }
    this.deleteFromQueue(this.currentDownload.beatmapSetInfos);
    this.currentDownload = { item: null, beatmapSetInfos: { beatmapSetId: null, uniqId: null, beatmapSetInfos: null } };
  }

  pushToQueue({ beatmapSetId, uniqId, beatmapSetInfos }) {
    if (!this.savePath) throw new Error('noSavePath');
    this.addToQueue({ beatmapSetId, uniqId, beatmapSetInfos });
    this.executeQueue();
  }

  cancelCurrent = () => {
    if (!this.currentDownload.item) throw new Error('noCurrentDownloadItem');
    this.currentDownload.item.cancel();
  };

  pauseResumeCurrent = () => {
    const { item } = this.currentDownload;
    if (!item) throw new Error('noCurrentDownloadItem');
    if (item.isPaused()) item.resume();
    else item.pause();
  };

  cancel = ({ beatmapSetId }) => {
    this.queue.forEach(item => item.beatmapSetId === beatmapSetId && this.deleteFromQueue(item));
  };

  download(queueItem) {
    const url = makeDownloadUrl({ beatmapSetId: queueItem.beatmapSetId, uniqId: queueItem.uniqId });
    this.winRef.webContents.downloadURL(url);
    this.setCurrentDownloadBeatmapInfos(queueItem);
  }

  executeQueue() {
    if (this.currentDownload.item || this.currentDownload.beatmapSetInfos.beatmapSetId) return;
    if (this.queue.size === 0) {
      if (this.retryIntervalId) {
        clearInterval(this.retryIntervalId);
        this.retryIntervalId = null;
      }
      this.winRef.setProgressBar(-1);
      if (['darwin', 'linux'].includes(process.platform)) {
        app.badgeCount = this.queue.size;
      }
      return;
    }
    const [queueItem] = this.queue;
    this.download(queueItem);
  }

  onWillDownload(event, item) {
    this.setCurrentDownloadItem(item);
    item.setSavePath(join(this.savePath, item.getFilename()));
    const beatmapSetId = this.currentDownload.beatmapSetInfos.beatmapSetId || item.getURLChain()[0].split('/')[4];

    item.on('updated', (_event, state) => {
      switch (state) {
        case 'interrupted':
          this.onInterrupted(item, beatmapSetId);
          break;
        case 'progressing':
          this.onProgress(item, beatmapSetId);
          break;
        default:
          break;
      }
    });
    item.once('done', (_event, state) => {
      switch (state) {
        case 'completed':
          this.onDone(item, beatmapSetId);
          break;
        case 'cancelled':
          this.onCancel(item, beatmapSetId);
          break;
        default:
          this.onFailed(item, state, beatmapSetId);
          break;
      }
    });
  }

  overallProgress(currentDownloadProgress) {
    const downloadsCount = this.queue.size;
    if (downloadsCount === 1) {
      this.winRef.setProgressBar(currentDownloadProgress / 100);
    } else if (downloadsCount === 0) {
      this.winRef.setProgressBar(-1);
    } else {
      this.winRef.setProgressBar(1 / downloadsCount);
    }
  }

  onProgress(item, beatmapSetId) {
    if (item.isPaused()) {
      this.sendToWin('download-paused', { beatmapSetId });
    } else {
      if (this.retryIntervalId) {
        clearInterval(this.retryIntervalId);
        this.retryIntervalId = null;
      }
      const receivedBytes = item.getReceivedBytes();
      const now = performance.now();
      const bytesPerSecond =
        (receivedBytes - (this.lastReceivedBytes || 0)) / ((now - (this.lastProgress || 0)) * 1000);

      this.lastProgress = now;
      this.lastReceivedBytes = receivedBytes;
      const progressPercent = ((receivedBytes / (item.getTotalBytes() || 1)) * 100).toFixed(2);
      this.overallProgress(progressPercent);
      const downloadSpeed = readableBits(bytesPerSecond);

      this.sendToWin('download-progress', { beatmapSetId, progressPercent, downloadSpeed });
    }
  }

  onInterrupted(_item, beatmapSetId) {
    // Download is interrupted but can be resumed
    this.sendToWin('download-interrupted', { beatmapSetId });
    this.startRetrying();
  }

  onCancel(_item, beatmapSetId) {
    this.sendToWin('download-canceled', { beatmapSetId });
    this.clearCurrentDownload(true);
    this.executeQueue();
  }

  onDone(item, beatmapSetId) {
    if (process.platform === 'darwin') {
      app.dock.downloadFinished(join(this.savePath, item.getFilename()));
    }
    this.sendToWin('download-succeeded', { beatmapSetId });
    this.clearCurrentDownload();
    this.executeQueue();
  }

  onFailed(_item, _state, beatmapSetId) {
    this.sendToWin('download-failed', { beatmapSetId });
    this.clearCurrentDownload();
    this.executeQueue();
  }

  resumeCurrent() {
    this.currentDownload.item.resume();
  }

  startRetrying() {
    if (!this.currentDownload.item) {
      throw new Error('noCurrentDownloaditem');
    }
    if (this.currentDownload.item.getState() !== 'interrupted') {
      throw new Error('currentDownloadNotInterrupted');
    }
    const retry = () => {
      isOnline(online => {
        if (online) {
          if (!this.currentDownload.item) {
            clearInterval(this.retryIntervalId);
            this.retryIntervalId = null;
          }
          // retry current 4 times then skip to next one
          if (this.currentDownload.retryCount > 3) {
            // skip to next one
            this.currentDownload.item.cancel();
          } else {
            this.resumeCurrent();
            this.currentDownload.retryCount = (this.currentDownload.retryCount || 0) + 1;
          }
        } else {
          // keep retrying current
          this.resumeCurrent();
        }
      }, this.sendToWin);
    };
    if (!this.retryIntervalId) this.retryIntervalId = setInterval(retry, this.retryInterval);
  }
}

module.exports = new BeatmapDownloader();