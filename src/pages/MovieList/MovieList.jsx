import { movies } from '../../data/movieData'
import MovieCard from '../../components/MovieCard/MovieCard'
import './MovieList.css'

const MovieList = () => {
  return (
    <>
      <h1>Movie List</h1>
      {movies.map(movie =>
        <MovieCard key={movie._id} movie={movie} />
      )}
    </>
  )
}

export default MovieList