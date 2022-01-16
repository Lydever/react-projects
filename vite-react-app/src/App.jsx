import { useState } from 'react'
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import routes from "./router";

function App() {
  const [count, setCount] = useState(0)

  return <Router>
    <Routes>
      {
        routes.map(route => <Route exact key={route.path} element={<route.component/>} path={route.path}>
        </Route>)
      }
    </Routes>
  </Router>
}

export default App
