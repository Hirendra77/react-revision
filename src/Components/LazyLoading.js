import React, {Suspense} from 'react'
import Lorem from "./Lorem"
import Home from "./Home"

// Lazy Loading means to load a component when we really need it;
const Lorem = React.lazy(()=>import("./Lorem"))
const Home = React.lazy(()=>import ("./Home"))

function LazyLoading() {
  return (
    <div>
<Suspense fallback={<div><h1>Loading... please wait</h1></div>}>
        <Home/>
        <Lorem/>
        </Suspense>
    </div>
  )
}

export default LazyLoading;