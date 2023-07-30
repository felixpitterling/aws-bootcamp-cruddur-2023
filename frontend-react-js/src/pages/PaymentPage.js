
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import { useParams } from 'react-router-dom';


import CheckoutForm from "components/CheckoutForm";
import "./PaymentPage.css";

import { checkAuth } from 'lib/CheckAuth';
import { post } from "lib/Requests";

export default function PaymentPage() {
  const [clientSecret, setClientSecret] = useState(""); 
  const [oldPremiumStatus, setOldPremiumStatus] = useState(false);
  const [errors, setErrors] = React.useState([]);
  const [user, setUser] = React.useState(null);
  const dataFetchedRef = React.useRef(false);
  
  const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`);
  
  const loadData = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/api/activities/create-payment-intent`;
    const payload_data = {
      items: [{ id: "Cruddur Premium" }],
      customer: user.cognito_user_uuid
    };
    post(url, payload_data, {
      auth: false,
      setErrors: setErrors,
      success: function (data) { 
        setOldPremiumStatus(data.oldPremiumStatus)
        setClientSecret(data.clientSecret);
      },
    });
 
  };

  React.useEffect(() => {
    //prevents double call
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    checkAuth(setUser);
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

  // return (
  //   <div className="App">
  //     {clientSecret && (
  //       <Elements options={options} stripe={stripePromise}>
  //         <CheckoutForm />
  //       </Elements>
  //     )}
  //   </div>
  // );

  return (
    <div className="App">
      {oldPremiumStatus == true ? (
        <div className="premium-message">
          <p>You already have premium access!</p>
        </div>
      ) : (
        // Render the checkout form if oldPremiumStatus is not true
        clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )
      )}
    </div>
  );

  
}