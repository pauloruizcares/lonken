import 'typeface-roboto'
import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import routes from './routes'
import { ThemeProvider } from '@material-ui/styles'
import Helmet from 'react-helmet'
import { BrowserRouter as Router } from 'react-router-dom'
import { FadeLoader as Spinner } from 'react-spinners'
import theme from './themes/default'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client'

const App = (props) => {
  const { env } = props

  const client = new ApolloClient({
    uri: `${env.REACT_APP_API_URL}?access_token=${env.REACT_APP_ACCESS_TOKEN}`,
    cache: new InMemoryCache(),
  })

  return (<div data-testid='App'>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Helmet bodyAttributes={{
          style: 'margin:0',
        }}/>
        <Router>
          <Switch>
            <Suspense fallback={<Spinner color={'lightblue'} size={150}/>}>
              {routes.map(({ to, exact, Page }, index) => (<Route
                exact={exact}
                key={`route-${index}`}
                path={to}
              >
                <Page />
              </Route>))
              }
            </Suspense>
          </Switch>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  </div>)
}

App.defaultProps = {
  env: {},
}

App.propTypes = {
  env: PropTypes.object,
}


export default App
