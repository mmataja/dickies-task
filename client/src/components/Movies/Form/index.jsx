import React, { useEffect, useState } from 'react';
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

const ratings = [
  {
    value: 1,
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
  {
    value: 4,
  },
  {
    value: 5,
  },
  {
    value: 6,
  },
  {
    value: 7,
  },
  {
    value: 8,
  },
  {
    value: 9,
  },
  {
    value: 10,
  },
]

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
                  <MenuItem key={rating.value} value={rating.value}>
                    {rating.value}
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
