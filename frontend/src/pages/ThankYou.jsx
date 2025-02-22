import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="thank">
      <i class="ri-checkbox-circle-line"></i>
      <h1>Thank You</h1>
      <h2>your toor is booked</h2>
      <button onClick={() => navigate("/home")}>Back to Home</button>
    </div>
  );
};

export default ThankYou;
