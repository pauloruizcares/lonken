import React from 'react'
import PropTypes from 'prop-types'
import ContainerHeader from '../../components/Header/Header.container'
import Footer from '../../components/Footer'

const Principal = (props) => {
  const { children } = props

  return (<div data-testid='Principal'>
    <ContainerHeader/>
    <main>
      {children}
    </main>
    <Footer/>
  </div>)
}

Principal.propTypes = {
  children: PropTypes.any,
}

Principal.defaultProps = {}

export default Principal
