import { NavLink } from 'react-router-dom'

const NavButtons = () => {
  return (
    <nav className='nav-buttons'>
        <NavLink to='/' className='nav-link'>Home</NavLink>
        <NavLink to='/book' className='nav-link'>Encyclopedia</NavLink>
        <NavLink to='/rules' className='nav-link'>Rules</NavLink>
    </nav>
  )
}

export default NavButtons