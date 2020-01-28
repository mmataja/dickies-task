import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

import styles from './styles';

const CardItem = ({
  title,
  genre,
  rating,
  explicit,
}) => {
  const classes = styles();

  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="button">
            Rating: <Typography>{rating} / 10</Typography>
          </Typography>
          <Typography variant="button">
            Genre: <Typography>{genre}</Typography> 
          </Typography>
          <Typography variant="button" color="error">
            {explicit ? 'explicit' : null}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            View
          </Button>
          <Button size="small" color="primary">
            Edit
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  )
}

export default CardItem;
