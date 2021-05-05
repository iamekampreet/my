import './App.css';

// for react-router-dom to build multipage web app:
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//importing the pages having main content:
// import Temp from './testing/temp.js';
import Header from './login&cart/header.js';
import Login from './login&cart/login.js'; 
import Cart from './login&cart/cart.js';

export default function App(){
  return(
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/cart" component={Cart}/>
      </Switch>
    </Router>
  )
}
