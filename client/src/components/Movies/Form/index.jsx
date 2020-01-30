import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core';

import styles from './styles';

import AlertPopup from '../../AlertPopup';

const ratings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Form = ({ 
  match: { params: { id }},
  location: { state },
}) => {
  const classes = styles();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [isNewMovie, setIsNewMovie] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    explicit: '',
    genre: '',
    name: '',
    rating: '',
  });

  useEffect(() => {
    if (id) {
      const movieData = state;
      setFormData({ ...movieData });
      setIsNewMovie(false);
    }

    return () => {
      setFormData({
        explicit: '',
        genre: '',
        name: '',
        rating: '',
      });
      setIsNewMovie(true);
    }
  }, [id])

  const handleChange = inputValue => event => {
    setFormData({...formData, [inputValue]: event.target.value});
  }

  const submitMovie = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    if (isNewMovie) {
      const addMovie = await axios.post("http://localhost:4040/api/v1/movies", {
        ...formData,
      });

      return handleResponseStatus(addMovie.status);
    }

    const updateMovie = await axios.put(`http://localhost:4040/api/v1/movies/${id}`, {
      ...formData,
    });
    
    return handleResponseStatus(updateMovie.status);
  }

  const deleteMovie = async () => {
    const deletedMovie = await axios.delete(`http://localhost:4040/api/v1/movies/${id}`);

    return handleResponseStatus(deletedMovie.status);
  }

  const handleResponseStatus = (status) => {
    if (status === 200) {
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
    }

    setShowAlert(true);
    setIsLoading(false);
    
    return setTimeout(() => {
      setShowAlert(false);
      history.push('/movies');
    }, 2000);
  }

  return (
    <React.Fragment>
      <Grid container justify="center" alignItems="center" alignContent="stretch" className={classes.gridContainer}>
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
              {!isNewMovie
                ? <Button size="small" color="secondary" variant="outlined" onClick={deleteMovie} className={classes.button}>
                    DELETE
                  </Button>
                : null
              }
            </form>
          </CardContent>
        </Card>
        {isLoading
          ? <CircularProgress className={classes.marginTop3} />
          : null
        }
        {showAlert 
          ? <Grid item className={classes.marginTop3}>
              <AlertPopup isSuccess={isSuccess} />
            </Grid>
          : null
        }
      </Grid>
    </React.Fragment>
  )
};

Form.propTypes = {
  state: PropTypes.shape({
    name: PropTypes.string,
    genre: PropTypes.string,
    rating: PropTypes.number,
    explicit: PropTypes.bool,
  }),
  id: PropTypes.number,
};

export default Form;
