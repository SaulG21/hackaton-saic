import { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./home/screens/Home";
import Login from "./auth/screens/Login";
import SignUp from "./auth/screens/SignUp";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

function App() {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        setUser(null);
        localStorage.removeItem("user");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Switch>
      <Route path="/register">
        {user ? <Redirect to="/" /> : <SignUp />}
      </Route>
      <Route path="/login">
        {user ? <Redirect to="/" /> : <Login />}
      </Route>
      <Route path="/">
        {user ? <Home /> : <Redirect to="/login" />}
      </Route>
    </Switch>
  );
}

export default App;
