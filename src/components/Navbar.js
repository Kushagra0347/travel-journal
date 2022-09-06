import React from "react";
import "../css/navbar.css";
import logo from "../res/SVGs/logo.svg";

function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo-container'>
        <img src={logo} alt='logo' />
        <span>Travel Journal</span>
      </div>
    </div>
  );
}

export default Navbar;
