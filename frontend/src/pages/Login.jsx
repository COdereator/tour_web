import React, { useState } from "react";
import "../style/login.css";

import loginImg from "../images/login.png";
import userIcon from "../images/user.png";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
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
    <div className="login">
      <div className="login_left">
        <img src={loginImg} alt="" />
      </div>
      <div className="login_right">
        <div className="login_content">
          <img src={userIcon} alt="" />
          <h1>Login</h1>
          <div className="login_input">
            <input
              type="text"
              id="email"
              onChange={handleChange}
              placeholder="Email"
            />
            <br />
            <input
              type="text"
              id="password"
              onChange={handleChange}
              placeholder="Password"
            />
            <br />
            <button onClick={handleSubmit}>Login</button>
          </div>
          <div className="account">
            <span>Don't have an account? </span>
            <NavLink to="/register">Create</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
