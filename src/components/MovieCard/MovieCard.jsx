import { NavLink } from 'react-router-dom'
import './MovieCard.css'

const MovieCard = (props) => {
  return (
    <>
      <NavLink to={`/movies/${props.movie._id}`}>{props.movie.title}</NavLink>
    </>
  )
}

export default MovieCard