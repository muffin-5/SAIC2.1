import React from "react";
import logo from '../../assets/logo.svg';
import style from './Navbar.module.css'
const Navbar = () => {
  return (
    <>
      <div className={style.navContainer}>
        <div className={style.navImage}>
          <img src={logo} alt="No Image" />
        </div>
        <div className={style.navIntro}>
        <p>Indian Institute of Technology (BHU), Varanasi</p>
        <p id={style.navIntroText}>Student Alumni Interaction Cell</p>
        </div>
        <div className={style.navItems}>
          <a href="#">Initiatives</a>
          <a href="#">News and Media</a>
          <a href="#">Events</a>
          <a href="#">Services</a>
          <a href="#">Giving Back</a>
        </div>
        <div className={style.navButtoms}>
        <a href="#">Sign in</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
