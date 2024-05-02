import { movies } from '../../data/movieData'
import MovieCard from '../../components/MovieCard/MovieCard'
import './MovieList.css'

const MovieList = () => {
  console.log(movies)
  return (
    <>
      <div className="page-container">
        <div className="card-container">
          {movies.map(movie =>
            <MovieCard key={movie._id} movie={movie} />
          )}
        </div>
      </div>
    </>
  )
}

export default MovieList