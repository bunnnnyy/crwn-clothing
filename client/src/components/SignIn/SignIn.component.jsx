import React, { Component, useState } from "react";
import { connect } from "react-redux";

import FormInput from "../Form-input/Form-input.component";
import CustomButton from "../custom-button/custom-button.component";

// import { auth, SignInWithGoogle } from "../../firebase/firebase.utils";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import "./SignIn.styles.scss";

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;
  const HandleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  const HandleChange = (event) => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <div className="sign-in">
      <h1>I already have an account</h1>
      <label>signIn with your email and password</label>

      <form onSubmit={HandleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          label="email"
          handlechange={HandleChange}
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          label="password"
          handlechange={HandleChange}
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
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
