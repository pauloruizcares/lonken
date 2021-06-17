import React, { lazy, Suspense } from 'react'
import { FadeLoader as Spinner } from 'react-spinners'

const LazyHeader = lazy(() => import('./Header'))

const Header = (props) => (
  <Suspense fallback={<Spinner/>}>
    <LazyHeader {...props} />
  </Suspense>
)

export default Header
