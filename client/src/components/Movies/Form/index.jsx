import React from 'react';
import { Grid, Card, CardContent, Button, TextField } from '@material-ui/core';

import styles from './styles';

const Form = () => {
  const classes = styles();

  return (
    <React.Fragment>  
      <Grid container xs={12} justify="center" alignContent="stretch" className={classes.gridContainer}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <form autoComplete="off" className={classes.formItems}>
              <TextField id="standard-basic" label="Movie Title" />
              <TextField id="standard-basic" label="Genre" />
              <TextField id="standard-basic" label="Rating" />
              <TextField id="standard-basic" label="Explicit" />
              <Button size="small" color="primary">
                Update
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  )
}

export default Form;
