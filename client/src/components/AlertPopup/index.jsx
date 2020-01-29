import React from 'react';

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
}

export default AlertPopup;
