import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Navbar from '../../components/Navbar/Navbar'
import Drawer from '../../components/Drawer/Drawer'
import routes from '../../routes'

const Principal = (props) => {
  const { children } = props
  const [ openMenu, setOpenMenu ] = useState(false)

  const onClickMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (<div data-testid='Principal'>
    <header>
      <Navbar routes={routes} onClickMenu={onClickMenu}>
      </Navbar>
      <Drawer
        open={openMenu}
        toggleDrawerHandler={onClickMenu}
        routes={routes}/>
    </header>
    <main>
      {children}
    </main>
    <footer>
    footer
    </footer>
  </div>)
}

Principal.propTypes = {
  children: PropTypes.any,
}

Principal.defaultProps = {}

export default Principal
