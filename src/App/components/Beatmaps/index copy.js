import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import Beatmap from '../common/Beatmap'
import Search from './Search';

const styles = {
  list: {
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: 'repeat(auto-fit, minmax(700px, 1fr))',
    //gridGap: '10px'
  }
};

const Beatmaps = ({ theme, searchResults, classes, setHeaderContent }) => {
  const { search, beatmaps } = searchResults

  useEffect(() => {
    setHeaderContent(<Search theme={theme} lastSearch={search} />)
    return () => setHeaderContent(null)
  }, [setHeaderContent, search, theme])


  // const renderBeatmaps = () => {
  //   return beatmaps.map((beatmap, i) => {
  //     return beatmaps.length - i === 5 ?
  //       <VizSensor
  //         onChange={() => console.log('yeeeeeaa')}
  //         key={`fetchTrigger${beatmap.beatmapset_id || beatmap.id}`}>
  //         <Beatmap theme={theme} beatmap={beatmap} key={`beatmap${beatmap.beatmapset_id || beatmap.id}`} />
  //       </VizSensor> :
  //       <Beatmap theme={theme} beatmap={beatmap} key={`beatmap${beatmap.beatmapset_id || beatmap.id}`} />
  //   })
  // }

  const renderBeatmaps = () => {
    return beatmaps.map((beatmap, i) => {
      return <Beatmap theme={theme} beatmap={beatmap} key={`beatmap${beatmap.beatmapset_id || beatmap.id}`} />
    })
  }


  return (
    <div className='Beatmaps' >
      <div className={classes.list}>
        {renderBeatmaps()}
      </div>
    </div>
  );
}

const mapStateToProps = ({ main }) => ({ searchResults: main.searchResults })
export default connect(mapStateToProps)(injectSheet(styles)(Beatmaps));