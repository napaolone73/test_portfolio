import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

// ----------------------------------------------------------------------

Loading.propTypes = {
  className: PropTypes.string
};

function Loading({ className, ...other }) {
  return (
    <Box
      component="img"
      alt="logo"
      src="/loading.png"
      height={40}
      className={className}
      {...other}
    />
  );
}

export default Loading;
