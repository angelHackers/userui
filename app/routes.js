import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
// Auth
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';

// Pages
import Main from './components/layouts/Main';

import Home from './components/layouts/Home';
import Profile from './components/layouts/Profile';
import Book from './components/layouts/Book';
import Flights from './components/layouts/Flights';
import BookingStatus from './components/layouts/BookingStatus';
import FoundMatch from './components/layouts/FoundMatch';

// BONUS Pages


export default (
  <Route path="/userui" component={App}>
    <IndexRoute component={Login}/>
    // Auth
    <Route path="signup" component={Signup}/>
    <Route path="login" component={Login}/>
    <Route path="logout" component={Logout}/>
    // Pages
    <Route path="main" component={Main}/>

    <Route path="home" component={Home}/>
    <Route path="profile" component={Profile}/>
    <Route path="book" component={Book}/>
    <Route path="flights" component={Flights}/>
    <Route path="booking-status" component={BookingStatus}/>
    <Route path="found-match" component={FoundMatch}/>

    // BONUS

  </Route>
);
