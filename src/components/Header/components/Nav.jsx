import { NavLink } from 'react-router-dom'

const Nav = (props) => {
  return (
    <nav className="navigation-bar">
      <ul>
        {props.user ?
          <>
            <li> <NavLink to='/beers'>All Beers</NavLink></li>
            <li><NavLink to='/shops'>All Shops</NavLink></li>
            <li><NavLink to='/beers/new'>Add a Beer</NavLink></li>
            <li> <NavLink to='/shops/new'>Add a Shop</NavLink></li>
            <li onClick={() => props.handleLogout()}>Log out</li>
          </>
          :
          <>
            <li> <NavLink to='/login'>Login</NavLink></li>
            <li> <NavLink to='/signup'>Signup</NavLink></li>
          </>
        }
      </ul>
    </nav>
  )
}

export default Nav