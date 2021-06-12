import React, { lazy, Suspense } from 'react'
import { FadeLoader as Spinner } from 'react-spinners'

const LazyNavbar = lazy(() => import('./Navbar'))

const Navbar = (props) => (
  <Suspense fallback={<Spinner/>}>
    <LazyNavbar {...props} />
  </Suspense>
)

export default Navbar
