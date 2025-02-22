import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import "./footer.css";

const Footer = () => {
  const nav_links = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/about",
      display: "About",
    },
    {
      path: "/tours",
      display: "Tours",
    },
  ];
  const nav_links2 = [
    {
      path: "/Gallery",
      display: "Gallery",
    },
    {
      path: "/Login",
      display: "Login",
    },
    {
      path: "/Register",
      display: "Register",
    },
  ];

  return (
    <div className="footer">
      <div className="footer1">
        <img src={logo} height={60} alt="" />
        <p>
          Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Necess
        
        </p>
        <div className="icons">
          <i class="ri-youtube-line"></i>
          <i class="ri-github-fill"></i>
          <i class="ri-facebook-circle-line"></i>
          <i class="ri-instagram-line"></i>
        </div>
      </div>
      <div className="footer1">
        <h2>Discover</h2>
        {nav_links.map((link, index) => {
          return (
            <NavLink key={index} to={link.path}>
              <p>{link.display}</p>
            </NavLink>
          );
        })}
      </div>
      <div className="footer1">
        <h2>Quick Links</h2>
        {nav_links2.map((link, index) => {
          return (
            <NavLink key={index} to={link.path}>
              <p>{link.display}</p>
            </NavLink>
          );
        })}
      </div>
      <div className="footer1" style={{width:'25%'}}>
        <h2>Contact</h2>
        <div className="footercontent">
          <span>
            <i class="ri-map-pin-line"></i>{" "}
          </span>
          <h4>Address : </h4>
          <p>123 Main St, Anytown, USA 12345</p>
        </div>
        <div className="footercontent">
          <span>
            <i class="ri-mail-line"></i>
          </span>
          <h4>Email : </h4>
          <p>devmuhil01@gmail.com</p>
        </div>
        <div className="footercontent">
          <span>
            <i class="ri-phone-fill"></i>
          </span>
          <h4>Phone : </h4>
          <p>+019823982</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
