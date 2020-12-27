import React from 'react';

import HomePage from './pages/Homepage/homepage.component';
import Shoppage from './pages/shop/shoppage.component';
import SignInAndSignup from './pages/Sign-in-and-sign-up/Sign-in-and-Sign-up'

import Header from './components/header/Header.component';

import { Switch, Route } from 'react-router-dom';

import './App.css';



class App extends React.Component {
  render() {
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={Shoppage} />
          <Route exact path='/signin' component={SignInAndSignup} />
        </Switch>
      </div>
    );
  }
}

export default App;
