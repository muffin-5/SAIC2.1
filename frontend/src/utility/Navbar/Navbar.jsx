import React from "react";
import logo from '../../assets/logo.svg';
import './Navbar.css'
const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="image">
          <img src={logo} alt="No Image" />
        </div>
        <div className="intro">
        <p>Indian Institute of Technology (BHU), Varanasi</p>
        <p id="saic">Student Alumni Interaction Cell</p>
        </div>
        <div className="items">
          <a href="#">Initiatives</a>
          <a href="#">News and Media</a>
          <a href="#">Events</a>
          <a href="#">Services</a>
          <a href="#">Giving Back</a>
        </div>
        <div className="buttoms">
        <a href="#" className="signup-button">Sign in</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
