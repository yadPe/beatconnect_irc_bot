import React, { useState, useContext } from 'react';
import renderIcons from '../../../utils/renderIcons'
import { ProgressCircle, Button, Text } from 'react-desktop/windows';
import { remote, shell } from 'electron';
import downloadQueue from '../../../utils/DownloadQueue'
import { HistoryContext } from '../../../../HistoryProvider';

const DownloadBeatmapBtn = ({ theme, url, downloadHistory, infos }) => {
  const { title, artist, creator, id } = infos;
  const fullTitle = `${title} - ${artist} | ${creator}`
  const [isDownloading, setIsDownloading] = useState(false)
  const history = useContext(HistoryContext);
  // const idRegEx = /.*?(\d+)/i;
  // const beatmapSetId = id// idRegEx.exec(url)[1]
  const downloaded = history.contains(id)
  
  const downloadBeatmap = () => {
    setIsDownloading(true)

    downloadQueue.push({ url, id, onFinished: () => {
      history.save({id, name: fullTitle})
      setIsDownloading(false)
    }})

    // downloadManager.download({
    //   url,
    //   onProgress: ({ progress }) => {
    //     //setIsDownloading(progress)
    //   }
    // },
    //   (err, infos) => {
    //     if (err) console.error(err)
    //     shell.openItem(infos.filePath)
    //     setIsDownloading(false)

    //     console.log('Finished dl', infos)
    //   })
  }
  return (
    <Button
      push
      color={theme.color}
      onClick={downloadBeatmap}>
      {
        isDownloading ?
          <ProgressCircle
            className='ProgressCircle'
            color='#fff'
            size={25}
          /> :
             downloaded ? renderIcons('Checked', theme.style) : renderIcons('Download', theme.style) 
      }
    </Button>
  );
}

export default DownloadBeatmapBtn;