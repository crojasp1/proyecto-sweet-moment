import React from "react";
import "./Navbar.css";
import sweetMomentLogo from "../../assets/logos/logo.jpeg";
import profileImg from "../../assets/logos/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left-logo">
        <img src={sweetMomentLogo} alt="Sweet Moment Logo" />
        <div className="navbar-logoTitle">
          <h2>Sweet Moment</h2>
          <p>Panel del Administrador</p>
        </div>
      </div>
      <div className="navbar-profileContainer">

        <img className="navbar-profileImg" src={profileImg} alt="profile image" />
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </div>
  );
};

export default Navbar;
