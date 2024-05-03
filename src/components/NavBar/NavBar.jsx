import { NavLink } from 'react-router-dom'
import navIcon from '../../assets/icon1.png'
import './NavBar.css'

const NavBar = (props) => {

  const handleSelectTheme = evt => {
    props.handleChangeThemeIdx(evt.target.value)
  }

  return (
    <nav>
      <NavLink to='/'><img className='logo' src={navIcon} alt="a movie film camera" /></NavLink>
      <select name="theme" onChange={handleSelectTheme}>
        <option value={props.themeIdx}>{props.themes[props.themeIdx].name}</option>
        {props.themes.map((theme, idx) => 
          <option key={theme.name} value={idx}>{theme.name}</option>
        )}
      </select>
      <NavLink to='/movies'>Movies</NavLink>
    </nav>
  )
}

export default NavBar