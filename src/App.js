import React, { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import Signup from './Signup';
import { getAuth, onAuthStateChanged } from '@firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBBDJf1TrJZJOlGXaFJBGDR2vr-XKPRrQQ",
  authDomain: "login-8754a.firebaseapp.com",
  projectId: "login-8754a",
  storageBucket: "login-8754a.appspot.com",
  messagingSenderId: "9841915712",
  appId: "1:9841915712:web:417981310d0c0b99866ca5"
};
initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      setUser(user)
    })
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
