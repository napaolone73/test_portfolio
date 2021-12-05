import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MyContentLoadingError from 'src/views/Component/Card/MyContentLoadingError';
// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden'
  },
  main: {
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    paddingTop: APP_BAR_MOBILE + 40,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
      paddingTop: APP_BAR_DESKTOP + 40,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  }
}));

// ----------------------------------------------------------------------

MycbiLayout.propTypes = {
  children: PropTypes.node
};

function MycbiLayout({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>     
      <div className={classes.main}>
        <MyContentLoadingError showCard={false}  showError={true} showErrorInPopUp={true} showLoadingBackEnd={false}  /> 
        {children}
      </div>
    </div>
  );
}

export default MycbiLayout;
