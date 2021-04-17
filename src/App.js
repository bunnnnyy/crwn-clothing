import React, { Component } from "react";

import HomePage from "./pages/Homepage/homepage.component";
import Shoppage from "./pages/shop/shoppage.component";
import SignInAndSignup from "./pages/Sign-in-and-sign-up/Sign-in-and-Sign-up";
import CheckoutPage from "./pages/checkout/checkout.component";

import Header from "./components/header/Header.component";

import { Switch, Route, Redirect } from "react-router-dom";

import { auth, CreateUserProfileDocument } from "./firebase/firebase.utils";

import { connect } from "react-redux";

import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";

import "./App.css";

class App extends Component {
  UnsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.UnsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const UserRef = await CreateUserProfileDocument(userAuth);

        UserRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.UnsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shoppage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignup />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
