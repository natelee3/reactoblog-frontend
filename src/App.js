import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import Home from './components/Home';
import MalletList from './components/MalletList';
import Navigation from './components/Navigation';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [userinfo, setUserInfo] = useState({
    isLoggedIn: false,
    username: '',
    name: ''
  })

    return (
      <div className="App">
        <Router >
        <Navigation />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/mallets'>
            <MalletList />
          </Route>
          <Route path='/login'>
            <LoginForm />
          </Route>
        </Switch>
          
        </Router>
       
      </div>
    );
  
  
}

export default App;
