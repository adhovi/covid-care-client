import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const SimpleCardForm = ({
  booking,
  setBooking,
  paymentSuccess,
  setPaymentSuccess,
}) => {
  const [paymentError, setPaymentError] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error);
      setPaymentSuccess("");
    } else {
      setPaymentError("");
      setPaymentSuccess(paymentMethod.id);
      const newBooking = { ...booking };
      newBooking.payment = paymentMethod.id;
      console.log(newBooking);
      setBooking(newBooking);
      console.log(booking);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <br />
      {paymentError && (
        <p style={{ color: "red" }}>Failed, {paymentError.message}</p>
      )}
      {paymentSuccess && <p style={{ color: "green" }}>Payment Successful</p>}
      {!paymentSuccess && (
        <div className="form-group d-flex justify-content-md-end justify-content-center me-2">
          <button className="btn my-btn my-3" type="submit" disabled={!stripe}>
            Pay
          </button>
        </div>
      )}
    </form>
  );
};

export default SimpleCardForm;
