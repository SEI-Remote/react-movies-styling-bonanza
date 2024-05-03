import { NavLink } from 'react-router-dom'
import './MovieCard.css'

const MovieCard = (props) => {
  return (
    <>
      <NavLink to={`/movies/${props.movie._id}`}>
        <div className="card">
          <img src={props.movie.imageURL} alt="poster for movie" />
        </div>
      </NavLink>
    </>
  )
}

export default MovieCard