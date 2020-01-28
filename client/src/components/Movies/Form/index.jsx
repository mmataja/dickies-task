import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Button, TextField } from '@material-ui/core';

import styles from './styles';

const Form = (props) => {
  const classes = styles();

  const [formData, setFormData] = useState({
    title: '',
    genre: '',
    rating: '',
    explicit: '',
  });
  const [isNewMovie, setIsNewMovie] = useState(true);
  
  useEffect(() => {
    const { id } = props.match.params
    if (id) {
      const movieData = props.location.state;
      setFormData({ ...movieData });
      setIsNewMovie(false);
    } 
  }, [])

  const handleChange = inputValue => event => {
    setFormData({...formData, [inputValue]: event.target.value});
  }

  const submitMovie = async (event) => {

  }

  return (
    <React.Fragment>  
      <Grid container justify="center" alignContent="stretch" className={classes.gridContainer}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <form autoComplete="off" className={classes.formItems} onSubmit={submitMovie}>
              <TextField 
                id="title" 
                label="Movie Title" 
                required={true}
                onChange={handleChange('title')}
                value={formData.title}
              />
              <TextField 
                id="genre" 
                label="Genre" 
                required={true}
                onChange={handleChange('genre')}
                value={formData.genre}
              />
              <TextField 
                id="standard-basic" 
                label="Rating" 
                required={true}
                onChange={handleChange('rating')}
                value={formData.rating}  
              />
              <TextField 
                id="standard-basic" 
                label="Explicit" 
                required={true}
                onChange={handleChange('explicit')}
                value={formData.explicit}
              />
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
