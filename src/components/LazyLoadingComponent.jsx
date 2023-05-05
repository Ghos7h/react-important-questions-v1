import React, {lazy, Suspense} from 'react'
// import Home from './LazyLoading/Home'
// import Lorem from './LazyLoading/Lorem'

const Lorem = lazy(()=> import('./LazyLoading/Lorem'))
const Home = lazy(()=> import('./LazyLoading/Home'))
const LazyLoadingComponent = () => {
  return (
    <div>
        <Suspense fallback = {<div>Loading...</div>}>
        <Home/>
        <Lorem/>
        </Suspense>
    </div>
  )
}

export default LazyLoadingComponent