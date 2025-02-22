import React, { useState } from "react";
import loginImg from "../images//register.png";
import userIcon from "../images/user.png";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });

  const handleChange = (e) => {
    setCredentials((values) => ({ ...values, [e.target.id]: e.target.value }));
  };

  const handleSubmit = () => {
    console.log(credentials);
  };

  return (
    <div className="login" style={{ height: "450px" }}>
      <div className="login_left">
        <img src={loginImg} alt="" />
      </div>
      <div className="login_right">
        <div className="login_content">
          <img src={userIcon} alt="" />
          <h1>Register</h1>
          <div className="login_input">
            <input
              type="text"
              id="username"
              onChange={handleChange}
              placeholder="Username"
            />
            <input
              type="text"
              onChange={handleChange}
              placeholder="Email"
              id="email"
            />
            <br />
            <input
              type="text"
              id="password"
              onChange={handleChange}
              placeholder="Password"
            />
            <br />
            <button onClick={handleSubmit}>Create Account</button>
          </div>
          <div className="account">
            <span>Already have an account? </span>
            <NavLink to="/login">Login</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
