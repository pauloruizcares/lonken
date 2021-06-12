import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Navbar = (props) => {
  const { routes } = props

  return (<nav data-testid='Navbar'>
    <div>
      <ul>
        {routes.map((route, indexRoute) => (
          <li
            key={`route-item-${indexRoute}`}
          >
            <Link to={route.to}>{route.title}</Link>
          </li>))}
      </ul>
    </div>
  </nav>)
}

Navbar.propTypes = {
  routes: PropTypes.array,
}

Navbar.defaultProps = {
  routes: [],
}

export default Navbar
