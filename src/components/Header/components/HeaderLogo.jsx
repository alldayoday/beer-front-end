import { NavLink } from 'react-router-dom'
import Logo from '../../../assets/header-logo.svg'
import Beer from '../../../assets/beer.svg'

const HeaderLogo = () => {
  return (
    <div className="header-logo-container">
      <NavLink to='/'>
        <img
        id="headerLogo"
          src={Beer}
          alt="The Cat Collector Logo"
        />
      </NavLink>
    </div>
  )
}

export default HeaderLogo