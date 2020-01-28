import React from 'react';
import { Container, Grid } from '@material-ui/core';

import styles from './styles';

import CardItem from '../CardItem';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const List = () => {
  const classes = styles();

  return (
    <React.Fragment>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <CardItem />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default List;