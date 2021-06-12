import 'typeface-roboto'
import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './routes'
import { ThemeProvider } from '@material-ui/styles'
import Helmet from 'react-helmet'
import { BrowserRouter as Router } from 'react-router-dom'
import { FadeLoader as Spinner } from 'react-spinners'
import theme from './themes/default'

const App = () => {
  return (<div data-testid='App'>
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
  </div>)
}

export default App
