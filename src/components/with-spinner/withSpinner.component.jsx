import React from "react";

import { SpinnerOverlay, SpinnerContainer } from "./withSpinner.styles";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherprops }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer></SpinnerContainer>
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherprops} />
    );
  };

  return Spinner;
};

export default WithSpinner;
