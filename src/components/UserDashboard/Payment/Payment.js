import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimpleCardForm from "./SimpleCardForm";

const stripePromise = loadStripe(
  "pk_test_51IhAh0EbwK4u6is12m8ZMtANBM2cWcIslHFeEI8GUYoxOjgfpKASRkaZ7r8JUSLRHvvgLC09MgjQVyUklNTOn03j00ulVHp0D5"
);

const Payment = ({
  booking,
  setBooking,
  paymentSuccess,
  setPaymentSuccess,
}) => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <SimpleCardForm
          booking={booking}
          setBooking={setBooking}
          paymentSuccess={paymentSuccess}
          setPaymentSuccess={setPaymentSuccess}
        ></SimpleCardForm>
      </Elements>
    </div>
  );
};

export default Payment;
