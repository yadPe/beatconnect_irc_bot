import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyle = createUseStyles({
  header: {
    position: 'relative',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '15px',
    textTransform: 'uppercase',
    padding: '0px 24px',
    overflow: 'hidden',
    cursor: 'default',
    userSelect: 'none',
    color: ({ theme }) => (theme.dark ? '#fff' : '#000'),
  },
  divider: {
    margin: '0 10px',
    width: '1px',
    height: '80%',
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: 'hsla(0,0%,100%,.1)',
  },
});
const Header = ({ title, children }) => {
  const theme = useTheme();
  const classes = useStyle({ theme });
  return (
    <div className={classes.header}>
      <span data-radium="true">{title}</span>
      <div className={classes.divider} />
      {children}
    </div>
  );
};

export default Header;