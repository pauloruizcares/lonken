import React, { createContext } from 'react'
import PropTypes from 'prop-types'

const { Provider, Consumer } = createContext('routes')

const RouteProvider = (props) => {
  const { children } = props
  return (
    <Provider value={'state'}>{children}</Provider>
  )
}

RouteProvider.propTypes = {
  children: PropTypes.any,
}

const RouteConsumer = ({ children }) => (
  <Consumer>{(value) => {
    const context = {
      context: {
        value: 'Hola mundo' + value,
      },
    }

    const componentWithContext = React.cloneElement(children, context)

    console.log(componentWithContext)

    return componentWithContext
  }}</Consumer>
)

RouteConsumer.propTypes = {
  children: PropTypes.any,
}

export { RouteProvider, RouteConsumer }
