import React from 'react';
import InjectSheet from 'react-jss';
import { compose } from 'redux';
import { withTheme } from 'theming';
import Skeleton from '../skeleton';

const styles = {
  beatmap: {
    margin: '1.3vh auto',
    height: '222px',
    width: '90%',
    background: ({ theme }) => theme.palette.primary.main,
  },
  cover: {
    height: '130px',
    width: '100%',
    background: '#5c5c5c',
  },
  text: {
    margin: '10px auto',
    height: '10px',
    background: '#5c5c5c',
  },
  buttons: {
    margin: '15px auto 0 auto',
    height: '30px',
    width: '25%',
    background: '#5c5c5c',
  },
};

const BeatmapSkeleton = ({ classes, style }) => {
  return (
    <div style={style}>
      <div className={`${classes.beatmap} Beatmap`}>
        <Skeleton className={classes.cover} />
        <Skeleton className={classes.text} style={{ width: '9%' }} />
        <Skeleton className={classes.text} style={{ width: '16%' }} />
        <Skeleton className={classes.buttons} />
      </div>
    </div>
  );
};

export default compose(
  withTheme,
  InjectSheet(styles),
)(BeatmapSkeleton);