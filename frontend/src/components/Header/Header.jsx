import React, { useEffect, useRef } from "react";
import "./header.css";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";

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

  

const Header = () => {

  const headerRef = useRef("");

  const stickyHeaderFunc = () =>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
        headerRef.current.classList.add("sticky_header");
      }
      else{
        headerRef.current.classList.remove("sticky_header");
      }
    })
  }

  useEffect(()=>{
    stickyHeaderFunc();

    return window.removeEventListener('scroll',stickyHeaderFunc);
  })

  return (
    <div className="header" ref={headerRef}>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="content">
        <ul>
          {nav_links.map((nav, index) => {
            return (
              <li key={index} className="nav_item">
                <NavLink to={nav.path}>{nav.display}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="right">
        <button className="btn-login">Login</button>
        <button className="btn-register">Register</button>
      </div>
    </div>
  );
};

export default Header;
