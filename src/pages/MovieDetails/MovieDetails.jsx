import { useParams } from 'react-router-dom'
import { getMovie } from '../../data/movieData'
import './MovieDetails.css'

const MovieDetails = () => {
  const { movieId } = useParams()
  const movie = getMovie(movieId)
  console.log(movie)

  return (
    <>
      <h1>{movie.title}</h1>
    </>
  )
}

export default MovieDetails