import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  AppBar,
  Button,
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
            <Link to="/" className={classes.headerTitle}>
              <Typography variant="h6" color="inherit" noWrap>
                Movies Collection
              </Typography>
            </Link>
            <div>
              <Link to='/movies' className={classes.textDecorationNone}>
                <Button href="" className={classes.listButton}>
                  Movies
                </Button>
              </Link>
              <Link to='/movies/new' className={classes.textDecorationNone}>
                <Button href="" className={classes.addButton}>
                  ADD Movie
                </Button>
              </Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </React.Fragment>
  )
}

export default withRouter(Header);
