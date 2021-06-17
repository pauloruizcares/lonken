import React, { lazy, Suspense } from 'react'
import { FadeLoader as Spinner } from 'react-spinners'

const LazyFooter = lazy(() => import('./Footer'))

const Footer = (props) => (
  <Suspense fallback={<Spinner/>}>
    <LazyFooter {...props} />
  </Suspense>
)

export default Footer
