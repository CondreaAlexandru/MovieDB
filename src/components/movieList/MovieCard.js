import React from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import { useHistory } from 'react-router-dom';

import Rating from './Rating'

import { formatDate } from '../../utils/dateUtils';
import { findByLabelText } from '@testing-library/react';

const useStyles = makeStyles({
  root: {
    maxWidth: 230,
    height: 450,
    margin: 20
  },
  card: {
    display: 'inline-flex',
    margin:  0,
    padding: 0
  }
});

const MovieCard = (props) => {
  const { movie, changeRating } = props
  let history = useHistory();
  const getPosterUrl = (imageUri) =>
  imageUri
    ? `https://image.tmdb.org/t/p/w200${imageUri}`
    : 'https://placehold.co/200x300?text=No+image'

    const classes = useStyles();

    
    
  return (
    <CardContent className={classes.card}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <CardMedia image="" description="movie poster"><img src={getPosterUrl(movie.poster_path)}/></CardMedia>
            <Typography variant="h6">{movie.title}</Typography>
            <Typography variant="body2" color="textSecondary">
              {formatDate(movie.release_date)}
            </Typography>
            {<div>
              <Rating
                userRating={props.movie.userRating}
                changeRating={changeRating}
                movieId={movie.id}
              />
            </div>}
          </CardContent>
          <CardActions>
          <Button size="small" color="secondary" onClick={()=> history.push(`/details/${movie.id}`)}>
            View details
          </Button>
        </CardActions>
        </CardActionArea>
      </Card>
    </CardContent>
  )
}

export default MovieCard
