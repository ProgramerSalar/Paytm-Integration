import React from "react";
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  const referenceNum = searchQuery.get("reference");
  return (
    <div>
      paymentSuccess
      <p>Your Reference Number: {referenceNum}</p>
    </div>
  );
};

export default PaymentSuccess;
