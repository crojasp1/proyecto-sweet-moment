import React from 'react';
import "./Navbar.css";
import sweetMomentLogo from "../../assets/logos/logo.jpeg";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left-logo'>
        <img src={sweetMomentLogo} alt="Sweet Moment Logo" />
          <div className='navbar-logoTitle'>
                    <h2>Sweet Moment</h2>
          <p>Panel del Administrador</p>
          </div>
      </div>
      <img src="" alt="" />
    </div>
  )
}

export default Navbar;
