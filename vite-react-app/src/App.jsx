import { useState } from 'react'
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import routes from "./router";

import Counter from "./views/Hooks/counter";
import CounterUseEffect from './views/Hooks/CounterUseEffect'
import CounterUseState from './views/Hooks/counterUseState'

function App() {
  /* const [count, setCount] = useState(0)

  return <Router>
    <Routes>
      {
        routes.map(route => <Route exact key={route.path} element={<route.component/>} path={route.path}>
        </Route>)
      }
    </Routes>
  </Router>*/
    // return <Counter/>
    // return <CounterUseState/>
    return <CounterUseEffect/>
}

export default App
