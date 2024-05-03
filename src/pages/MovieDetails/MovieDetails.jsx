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