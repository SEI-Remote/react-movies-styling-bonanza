import { NavLink } from 'react-router-dom'
import './MovieCard.css'

const MovieCard = ({ movie }) => {
  return (
    <>
      <NavLink to={`/movies/${movie._id}`}>
        <div className="card">
          <img src={movie.imageURL} alt="movie poster" />
        </div>
      </NavLink>
    </>
  )
}

export default MovieCard