import { useParams } from 'react-router-dom'
import { getMovie } from '../../data/movieData'
import './MovieDetails.css'

const MovieDetails = () => {
  const { movieId } = useParams()
  const movie = getMovie(movieId)
  console.log(movie)

  return (
    <>
    <div className="page-container">
      <h1>{movie.title}</h1>
    </div>
    </>
  )
}

export default MovieDetails