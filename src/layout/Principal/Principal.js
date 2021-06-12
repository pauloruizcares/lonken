import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../../components/Navbar/Navbar'
import routes from '../../routes'

const Principal = (props) => {
  const { children } = props

  return (<div data-testid='Principal'>
    <header>
      <Navbar routes={routes}>
      </Navbar>
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
