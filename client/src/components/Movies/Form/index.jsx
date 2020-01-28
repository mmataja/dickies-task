import React from 'react';
import { Paper, TextField } from '@material-ui/core';


const Form = () => {
  return (
    <React.Fragment>
      <form autoComplete="off">
        <TextField id="standard-basic" label="Movie Title" />
        <TextField id="standard-basic" label="Genre" />
        <TextField id="standard-basic" label="Rating" />
        <TextField id="standard-basic" label="Explicit" />
      </form>
    </React.Fragment>
  )
}

export default Form;
