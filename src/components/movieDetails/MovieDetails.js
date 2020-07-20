import React, { useEffect, useState } from 'react'

import { Link, useParams, useHistory } from 'react-router-dom'
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
  Container,
} from '@material-ui/core'

import { getDetails } from '../../api/MovieService'
import '../movieDetails/MovieDetails.css'

const getPosterUrl = (imageUri) =>
  imageUri
    ? `https://image.tmdb.org/t/p/w200${imageUri}`
    : 'https://placehold.co/200x300?text=No+image'

const MovieDetails = () => {
  const { id } = useParams()
  const [ movie, setMovie ] = useState({})
  let history = useHistory()

  useEffect(() => {
    getDetails(id).then((results) => setMovie(results.data))
  }, [id])

  return (
    <Container>
      <Card>
        <CardActionArea className='movieContainer'>
        <Typography variant="h6">{movie.title}</Typography>
          <CardContent>
            <CardMedia image="" description="movie poster" >
              <img src={getPosterUrl(movie.poster_path)} alt="Movie poster" />
              <ul className='cardDetails'>
                <li><span>Release Date: </span> {movie.release_date}</li>
                <li><span>Run Time: </span> {movie.runtime} min</li>
                <li><span>Tag Line: </span> {movie.tagline}</li>
                <li><span>Movie Note: </span> {movie.vote_average} / 10</li>
                <li><span>Language: </span>{movie.original_language}</li>
                <li><span> Original Title: </span>{movie.original_title}</li>
              </ul>
            </CardMedia>
            <div>
            <p><span>Details for movie:</span> <strong>{movie.title}</strong></p>
            <p className='description'><span>Sinopsis:</span> {movie.overview} </p>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="secondary"
            onClick={() => history.push(`/`)}>
            Back To Home Page
          </Button>
        </CardActions>
      </Card>
    </Container>
  )
}
export default MovieDetails
