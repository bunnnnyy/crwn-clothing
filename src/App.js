import React from 'react';

import HomePage from './pages/Homepage/homepage.component';
import Shoppage from './pages/shop/shoppage.component'

import { Switch, Route } from 'react-router-dom';

import './App.css';



class App extends React.Component {
  render() {
    return (
      <div >
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={Shoppage} />
        </Switch>
      </div>
    );
  }
}

export default App;
