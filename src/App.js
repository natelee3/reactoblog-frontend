import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import Home from './components/Home';
import MalletList from './components/MalletList';
import Navigation from './components/Navigation';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/PrivateRoute';

function App() {
  const [userinfo, setUserInfo] = useState({
    isLoggedIn: false,
    username: '',
    name: ''
  })

  const Protected = () => <h3>Protected</h3>

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
            <Login />
          </Route>
          <ProtectedRoute exact path='/dashboard' component={Dashboard}/>
        </Switch>
          
        </Router>
       
      </div>
    );
  
  
}

export default App;
