import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./index.css";
import { Switch, Route } from "react-router-dom";
import Home from './home/screens/Home';
import Login from './auth/screens/Login';
import SignUP from './auth/screens/SignUP';

function App() {

  return (
    <Switch>
      <Route path="/sign-up" component={SignUP}/>
      <Route path="/login" component={Login}/>
      <Route path="/" component={Home}/>
    </Switch>
  )
}

export default App
