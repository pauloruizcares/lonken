import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {
  validEnviromentVariables,
} from './configuration'

const env = validEnviromentVariables()

ReactDOM.render(
  <React.StrictMode>
    <App env={env}/>
  </React.StrictMode>,
  document.getElementById('root'),
)

reportWebVitals()
