import { NavLink } from 'react-router-dom'
import navIcon from '../../assets/icon1.png'
import './NavBar.css'

const NavBar = (props) => {

  const handleSelectTheme = evt => {
    props.handleChangeTheme(evt.target.value)
  }

  return (
    <nav>
      <NavLink to='/'><img className='logo' src={navIcon} alt="a movie film camera" /></NavLink>
      <select name="theme" onChange={handleSelectTheme}>
        <option value={props.currentTheme}>{props.currentTheme[0].toUpperCase() + 'heme ' + props.currentTheme[6].toUpperCase()}</option>
        <option value="theme-a">Theme A</option>
        <option value="theme-b">Theme B</option>
        <option value="theme-c">Theme C</option>
        <option value="theme-d">Theme D</option>
        <option value="theme-e">Theme E</option>
        <option value="theme-f">Theme F</option>
        <option value="theme-g">Theme G</option>
        <option value="theme-h">Theme H</option>
        <option value="theme-i">Theme I</option>
        <option value="theme-j">Theme J</option>
      </select>
      <NavLink to='/movies'>Movies</NavLink>
    </nav>
  )
}

export default NavBar