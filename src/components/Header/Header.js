import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Drawer from '../Drawer'
import Navbar from '../Navbar'

const Header = (props) => {
  const { routes } = props

  const [ openMenu, setOpenMenu ] = useState(false)

  const onClickMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (<header data-testid='Header'>
    <Navbar routes={routes} onClickMenu={onClickMenu}/>
    <Drawer
      open={openMenu}
      toggleDrawerHandler={onClickMenu}
      routes={routes}/>
  </header>)
}

Header.propTypes = {
  routes: PropTypes.array,
  onClickMenu: PropTypes.func,
}

Header.defaultProps = {
  routes: [],
}


export default Header
