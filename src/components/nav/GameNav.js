import { NavLink } from 'react-router-dom'

const GameNav = ({ path }) => {
  return (
    <nav className='nav-buttons'>
        <NavLink to={path} className='nav-link'>Retry</NavLink>
        <NavLink to='/' className='nav-link'>Return to Map</NavLink>
    </nav>
  )
}

export default GameNav