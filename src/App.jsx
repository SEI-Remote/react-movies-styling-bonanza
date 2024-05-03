import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavBar from './components/NavBar/NavBar'
import Landing from './pages/Landing/Landing'
import MovieList from './pages/MovieList/MovieList'
import MovieDetails from './pages/MovieDetails/MovieDetails'

import './App.css'

function App() {

  const [currentTheme, setCurrentTheme] = useState('theme-a')

  useEffect(() => {
    let theme = localStorage.getItem('theme')
    if (!theme) {
      handleChangeTheme('theme-a')
    } else {
      handleChangeTheme(theme)
    }
  }, [])

  const handleChangeTheme = newTheme => {
    setCurrentTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <>
    <div className={currentTheme}>
      <NavBar currentTheme={currentTheme} handleChangeTheme={handleChangeTheme} />
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/movies' element={<MovieList />} />
        <Route path='/movies/:movieId' element={<MovieDetails />} />
      </Routes>
    </div>
    </>
  )
}

export default App
