import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@material-ui/core';

import styles from './styles';

const ratings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Form = (props) => {
  const classes = styles();

  const [formData, setFormData] = useState({
    name: '',
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
    event.preventDefault();

    if (isNewMovie) {
      const addMovie = await axios.post("http://localhost:3000/api/v1/movies", {
        ...formData,
      });

      console.log(addMovie);
    }
  }

  return (
    <React.Fragment>
      <Grid container justify="center" alignContent="stretch" className={classes.gridContainer}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <form autoComplete="off" className={classes.formItems} onSubmit={submitMovie}>
              <TextField
                id="name"
                label="Movie Name"
                required={true}
                onChange={handleChange('name')}
                value={formData.name}
                className={classes.textFieldMargin}
              />
              <TextField
                id="genre"
                label="Genre"
                required={true}
                onChange={handleChange('genre')}
                value={formData.genre}
                className={classes.textFieldMargin}
              />
              <TextField
                id="rating"
                label="Rating"
                select
                required={true}
                onChange={handleChange('rating')}
                value={formData.rating}
                className={classes.textFieldMargin}
              >
                {ratings.map(rating => (
                  <MenuItem key={rating} value={rating}>
                    {rating}
                  </MenuItem>
                ))}
              </TextField>
              <FormControl component="fieldset">
                <FormLabel component="legend">Explicit</FormLabel>
                <RadioGroup
                  aria-label="explicit"
                  name="explicit"
                  value={formData.explicit}
                  onChange={handleChange('explicit')}
                >
                  <FormControlLabel value="true" control={<Radio />} label="Yes" />
                  <FormControlLabel value="false" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
              <Button size="small" color="primary" variant="outlined" type="submit" className={classes.button}>
                {isNewMovie ? "ADD" : "UPDATE"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  )
}

export default Form;
