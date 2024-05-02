import { NavLink } from 'react-router-dom'
import navIcon from '../../assets/icon1.png'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <NavLink to='/'><img className='logo' src={navIcon} alt="a movie film camera" /></NavLink>
      <NavLink to='/movies'>Movies</NavLink>
    </nav>
  )
}

export default NavBar