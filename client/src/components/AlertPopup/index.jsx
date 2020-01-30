import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const AlertPopup = ({ isSuccess }) => {
  const classes = styles();

  return (
    <React.Fragment>
      <div className={isSuccess ? classes.success : classes.error}>
        { isSuccess ? 'Success' : 'Error' }
      </div>
    </React.Fragment>
  )
};

AlertPopup.propTypes = {
  isSuccess: PropTypes.bool.isRequired,
};

export default AlertPopup;
