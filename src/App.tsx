import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./index.css";
import { Switch, Route } from "react-router-dom";
import Home from './home/screens/Home';

function App() {

  return (
    <Switch>
      <Route path="/" component={Home}/>
    </Switch>
  )
}

export default App
