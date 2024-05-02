import { Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import Landing from './pages/Landing/Landing'
import MovieList from './pages/MovieList/MovieList'
import MovieDetails from './pages/MovieDetails/MovieDetails'

import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/movies' element={<MovieList />} />
        <Route path='/movies/:movieId' element={<MovieDetails />} />
      </Routes>
    </>
  )
}

export default App
