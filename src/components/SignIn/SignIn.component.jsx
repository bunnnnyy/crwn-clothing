import React, { Component } from "react";
import { connect } from "react-redux";

import FormInput from "../Form-input/Form-input.component";
import CustomButton from "../custom-button/custom-button.component";

// import { auth, SignInWithGoogle } from "../../firebase/firebase.utils";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import "./SignIn.styles.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  HandleSubmit = async (event) => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;
    emailSignInStart(email, password);

    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({ email: "", password: "" });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  HandleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <label>signIn with your email and password</label>

        <form onSubmit={this.HandleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            label="email"
            handlechange={this.HandleChange}
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            label="password"
            handlechange={this.HandleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> SignIn </CustomButton>
            <CustomButton
              type="button"
              onClick={googleSignInStart}
              IsGoogleSignIn
            >
              {" "}
              SignIn with Google{" "}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
