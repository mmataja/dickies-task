import React from 'react';
import {
  AppBar,
  Button,
  Grid,
  Toolbar,
  Typography,
} from '@material-ui/core';

import styles from './styles';

const Header = () => {
  const classes = styles();

  return(
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <div className={classes.headerItemsContainer}>
            <Typography variant="h6" color="inherit" noWrap>
              Movies Collection
            </Typography>
            <div >
              <Button href="" className={classes.listButton}>
                Movies
              </Button>
              <Button href="" className={classes.addButton}>
                ADD Movie
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </React.Fragment>
  )
}

export default Header;
