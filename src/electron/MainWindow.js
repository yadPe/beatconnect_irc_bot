const { BrowserWindow, nativeTheme } = require('electron');
const windowStateKeeper = require('electron-window-state');
const { autoUpdater } = require('electron-updater');
const { join } = require('path');
const isDev = require('electron-is-dev');
const beatmapDownloader = require('./BeatmapDownloader');
const taskBar = require('./helpers/windowsTaskBar');
const { getBeatconnectProtocolParams } = require('./helpers');

const makeMainWindowSettings = () => {
  const mainWindowState = windowStateKeeper({
    defaultWidth: 1200,
    defaultHeight: 800,
  });

  // default window settings
  return [
    mainWindowState,
    {
      icon: join(__dirname, '../icon.png'),
      x: mainWindowState.x,
      y: mainWindowState.y,
      width: mainWindowState.width,
      height: mainWindowState.height,
      minHeight: 550,
      minWidth: 890,
      show: false,
      darkTheme: true,
      // eslint-disable-next-line no-unneeded-ternary
      frame: process.env.ELECTRON_START_URL ? true : false,
      backgroundColor: '#000',
      webPreferences: {
        nodeIntegration: true,
        webSecurity: false,
        // FIXME: When migrating to electron 13
        enableRemoteModule: true,
      },
    },
  ];
};

const makeMainWindow = ({ content, ...options }) => {
  nativeTheme.themeSource = 'dark';
  const [mainWindowState, defaultOptions] = makeMainWindowSettings();
  const mainWindow = new BrowserWindow({ ...defaultOptions, ...options });
  mainWindow
    .once('ready-to-show', () => {
      mainWindow.show();
      beatmapDownloader.register(mainWindow);
      mainWindowState.manage(mainWindow);
      taskBar.register(mainWindow);
      if (isDev) mainWindow.webContents.openDevTools();
      {
        const protocolArgs = getBeatconnectProtocolParams(process.argv, 'beatconnect');
        if (protocolArgs) mainWindow.webContents.send('beatconnect-open', protocolArgs);
      }
    })
    .on('show', () => {
      setTimeout(() => {
        autoUpdater.checkForUpdatesAndNotify();
      }, 5000);
    });

  if (process.env.ELECTRON_START_URL) mainWindow.loadURL(process.env.ELECTRON_START_URL);
  else mainWindow.loadFile(content);
  return mainWindow;
};

module.exports = makeMainWindow;
