import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  IsGoogleSignIn,
  inverted,
  ...otherprops
}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      IsGoogleSignIn ? "google-sign-in" : ""
    } custom-button `}
    {...otherprops}
  >
    {children}
  </button>
);

export default CustomButton;
