import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid } from '@material-ui/core';

import styles from './styles';

import CardItem from '../CardItem';

const List = () => {
  const classes = styles();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/movies')
      .then((response) => {
        console.log(response)
        if (movies === null) {
          return setMovies(response.data);
        }
        const allMovies = [...movies, ...response.data];
        setMovies(allMovies);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <React.Fragment>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {movies !== null
              ? movies.map(movie => (
              <Grid item key={movie.id} xs={12} sm={6} md={4}>
                <CardItem 
                  title={movie.name}
                  genre={movie.genre}
                  rating={movie.rating}
                  explicit={movie.explicit}
                  id={movie.id}
                />
              </Grid>
              ))
              : null
            }
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default List;