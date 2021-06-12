import React, { lazy, Suspense } from 'react'

const LazyPrincipal = lazy(() => import('./Principal'))

const Principal = (props) => (
  <Suspense fallback={null}>
    <LazyPrincipal {...props} />
  </Suspense>
)

export default Principal
