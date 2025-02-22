import React, { useState } from "react";
import "./booking.css";
import { useNavigate } from "react-router-dom";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews } = tour;

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    userId: "01",
    userEmail: "user@gmail.com",
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
    navigate("/thank-you");
  };

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(credentials.guestSize) + Number(serviceFee);

  return (
    <form className="booking" onSubmit={handleSubmit}>
      <div className="booking_header">
        <p>
          <b>${price}</b> /per person
        </p>
        <span>
          <i className="ri-star-fill" style={{ color: "#fe9f40" }}></i>
          {avgRating === 0 ? null : avgRating}( {reviews.length} )
        </span>
      </div>
      <h2>Information</h2>
      <div className="booking_form">
        <input
          type="text"
          placeholder="Full Name"
          id="fullName"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Phone"
          id="phone"
          onChange={handleChange}
        />
        <div className="date">
          <input type="date" id="bookAt" onChange={handleChange} />
          <input
            type="number"
            placeholder="Guest"
            id="guestSize"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="quantity">
        <p>
          <span>$99 x 1 person</span>
          <span>${price}</span>
        </p>
        <p>
          <span>Service charge</span>
          <span>${serviceFee}</span>
        </p>
        <p>
          <b>Total</b>
          <b>${totalAmount}</b>
        </p>
        <button>Book Now</button>
      </div>
    </form>
  );
};

export default Booking;
