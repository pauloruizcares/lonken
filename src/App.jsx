import 'typeface-roboto'
import React, { Suspense } from 'react'
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

const client = new ApolloClient({
  uri: 'https://graphql.contentful.com/content/v1/spaces/bjxblkuj6k9o/environments/master?access_token=KCLTGqOf2tow6qiOysgwYdZzRwUkwVkzx1DW54Wv_T8',
  cache: new InMemoryCache(),
  request: (operation) => {
    operation.setContext({
      headers: {
        authorization: 'Bearer KCLTGqOf2tow6qiOysgwYdZzRwUkwVkzx1DW54Wv_T8',
      },
    })
  },
})


const App = () => {
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

export default App
