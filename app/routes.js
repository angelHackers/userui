import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
// Auth
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';

// Pages
import Main from './components/layouts/Main';

export default (
  <Route path="/userui" component={App}>
    <IndexRoute component={Login}/>
    // Auth
    <Route path="signup" component={Signup}/>
    <Route path="login" component={Login}/>
    <Route path="logout" component={Logout}/>
    // Pages
    <Route path="main" component={Main}/>
  </Route>
);
