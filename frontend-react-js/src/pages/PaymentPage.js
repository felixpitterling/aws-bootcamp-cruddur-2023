
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import { useParams } from 'react-router-dom';

import CheckoutForm from "components/CheckoutForm";
import "./PaymentPage.css";

import { checkAuth } from 'lib/CheckAuth';
import { post } from "lib/Requests";

const stripePromise = loadStripe("pk_test_51LtWXlHl6gmAm4mQq3xVLsZeMfo3bmn9bqWHvbB5J9qoYJXQTBLP3wE1h4ozIO44Tq0FAYUKkUW3gD4KQW6RUlbP00aoedBCj8");

export default function PaymentPage() {
  const [clientSecret, setClientSecret] = useState("");
  const [errors, setErrors] = React.useState([]);
  const [user, setUser] = React.useState(null);
  const dataFetchedRef = React.useRef(false);

  const loadData = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/api/activities/create-payment-intent`;
    const payload_data = {
      items: [{ id: "Cruddur Premium" }],
      customer: user.cognito_user_uuid
    };
    post(url, payload_data, {
      auth: true,
      setErrors: setErrors,
      success: function (data) {
        setClientSecret(data.clientSecret);
      },
    });
  };

  React.useEffect(() => {
    //prevents double call
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    checkAuth(setUser);
    loadData();
  }, [])

  React.useEffect(() => {
    if (user) {
      loadData();
    }
  }, [user]);
  
  const appearance = {
    theme: 'night',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}