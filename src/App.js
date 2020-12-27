import React, { Component } from 'react';

import HomePage from './pages/Homepage/homepage.component';
import Shoppage from './pages/shop/shoppage.component';
import SignInAndSignup from './pages/Sign-in-and-sign-up/Sign-in-and-Sign-up'

import Header from './components/header/Header.component';

import { Switch, Route } from 'react-router-dom';

import {auth} from './firebase/firebase.utils'

import './App.css';



class App extends Component {
  constructor(){
    super();
    this.state = {
      currentuser : null
    }
  }

  UnsubscribeFromAuth = null

  componentDidMount(){
    this.UnsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentuser : user});

      console.log(user);
    })
  }

  componentWillUnmount(){
    this.UnsubscribeFromAuth();
  }

  render() {
    return (
      <div >
        <Header currentuser={this.state.currentuser} />
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
