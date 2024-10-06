
import "./index.css";
import { Switch, Route } from "react-router-dom";
import Home from './home/screens/Home';
import Login from './auth/screens/Login';
import SignUP from './auth/screens/SignUp';

function App() {

  return (
    <Switch>
          <Route path="/" component={Home}/>
          <>
            <Route path="/register" component={SignUP}/>
            <Route path="/login" component={Login}/>
          </>
    </Switch>
  )
}

export default App
