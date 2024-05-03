import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavBar from './components/NavBar/NavBar'
import Landing from './pages/Landing/Landing'
import MovieList from './pages/MovieList/MovieList'
import MovieDetails from './pages/MovieDetails/MovieDetails'
import { themeData } from './data/themeData'

import './App.css'

function App() {

  const [themeIdx, setThemeIdx] = useState(0)

  useEffect(() => {
    let newThemeIdx = localStorage.getItem('themeIdx')
    if (!themeData[newThemeIdx]?.styles) {
      handleChangeThemeIdx(0)
    } else {
      handleChangeThemeIdx(newThemeIdx)
    }
  }, [])

  const handleChangeThemeIdx = newIdx => {
    setThemeIdx(newIdx)
    localStorage.setItem('themeIdx', newIdx)
  }

  return (
    <>
    <div style={themeData[themeIdx].styles}>
      <NavBar 
        themeIdx={themeIdx} 
        handleChangeThemeIdx={handleChangeThemeIdx} 
        themes={themeData} 
      />
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
