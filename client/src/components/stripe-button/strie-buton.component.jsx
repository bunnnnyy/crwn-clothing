import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import Crown from "../../assets/crown.svg";
const stripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const publishableKey =
    "pk_test_51IlbAnSCZcZQMjATYHdisuq5ZJpqpDtjMpbddNaUFXoAxQFjUQDfLjxVkqHILtqVgtbCmd6AnDmjtIqH19jfIn3H00vB9UbIrQ";
  const onToken = (token) => {
    axios({
      url: "http://localhost:5000/payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("payment successful");
      })
      .catch((error) => {
        console.log("payment error: ", error);
        alert(
          "There was an issue with your payment . please make sure you use the provided credit card"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image={Crown}
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default stripeCheckoutButton;
