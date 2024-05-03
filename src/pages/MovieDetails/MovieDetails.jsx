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
        <div className="title-container">
          <h1>{movie.title}</h1>
          <h3>{movie.tagline}</h3>
        </div>
        <div className="details-container">
          <img src={movie.imageURL} alt="poster for movie" />\
          <div className="movie-info-container">
            <h2>Released: {new Date(movie.releaseDate).toLocaleDateString()}</h2>
            <h2>Runtime: {movie.runtime}</h2>
            <h2>IMDB Rating: {movie.ratings.imdb}</h2>
          </div>
        </div>
        <div className="cast-container">
          {movie.cast.map(castMember =>
            <div key={castMember.name} className="cast-card">
              <img src={castMember.photoUrl} alt="IMDB image for cast member" />
              <h2>{castMember.name}</h2>
              <h2>as</h2>
              <h2>{castMember.character}</h2>
            </div>
          )}
        </div>
      </div>
      <div className='test-sq' style={{height: '500px', width: '500px', background: 'var(--bg-primary)'}}>
        ←←←←←←  bg-primary →→→→→→
        <div className='test-sq' style={{height: '400px', width: '400px', background: 'var(--bg-secondary)'}}>
        ←←←←  bg-secondary →→→→
          <div className='test-sq' style={{height: '300px', width: '300px', background: 'var(--accent-primary)'}}>
          ←←←  accent-primary →→→
            <div className='test-sq' style={{height: '200px', width: '200px', background: 'var(--accent-secondary)', color: `var(--bg-primary)`}} >
            ←←  accent-secondary →→
              <div className='test-sq' style={{height: '100px', width: '100px', background: 'var(--contrast)', color: `var(--bg-primary)`}}>
              ←  contrast →
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieDetails