import React from 'react'
import Home from './pages/Home/Home.lazy'
import About from './pages/About/About.lazy'

const routes = [
  {
    to: '/',
    exact: true,
    title: 'Home',
    Page: () => <Home/>,
  },
  {
    to: '/about',
    title: 'About',
    Page: () => <About/>,
  },
]

export default routes
