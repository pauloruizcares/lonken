import React, { lazy, Suspense } from 'react'
import { FadeLoader as Spinner } from 'react-spinners'

const LazyDrawer = lazy(() => import('./Drawer'))

const Drawer = (props) => (
  <Suspense fallback={<Spinner/>}>
    <LazyDrawer {...props} />
  </Suspense>
)

export default Drawer
