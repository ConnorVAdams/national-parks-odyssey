import { NavLink } from 'react-router-dom'
import "./NavButtons.css"

const NavButtons = () => {
  return (
    <nav className='nav-buttons'>
      <NavLink to='/' className='nav-link'>
        <div className="nav-link-item">
          <img className="mountain" src="https://static.vecteezy.com/system/resources/thumbnails/001/206/260/small/mountain.png" alt="Home Icon" />
          Home
        </div>
      </NavLink>
      <NavLink to='/book' className='nav-link'>
        <div className="nav-link-item">
          <img className="mountain" src="https://static.vecteezy.com/system/resources/thumbnails/001/206/260/small/mountain.png" alt="Book Icon" />
          Encyclopedia
        </div>
      </NavLink>
      <NavLink to='/rules' className='nav-link'>
        <div className="nav-link-item">
          <img className="mountain" src="https://static.vecteezy.com/system/resources/thumbnails/001/206/260/small/mountain.png" alt="Rules Icon" />
          Rules
        </div>
      </NavLink>
    </nav>
  )
}

export default NavButtons
