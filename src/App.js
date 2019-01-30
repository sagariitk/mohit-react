import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './App1.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Index from './components/Index';
import Login from './components/Login';
import Logout from './components/Logout';
import Profile from './components/Profile';
import Tests from './components/Tests';
import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';
import Error from './components/Error';

class App extends Component {
  render() {
    return (
        <div>
        <BrowserRouter>
        <div>
            {/* <Navigation /> */}
            <Switch>
                <Route path = "/" component = {Index} exact  />
                <Route path = "/Login" component = {Login} exact  />
                <Route path = "/Profile" component = {Profile} exact />
                <Route path = "/Dashboard" component = {Dashboard} exact />
                <Route path = "/Tests" component = {Tests} exact />
                <Route path = "/Logout" component = {Logout} exact />
                <Route component = {Error} />
                </Switch>
        </div>
        </BrowserRouter>

        </div>
    );
  }
}

export default App;
