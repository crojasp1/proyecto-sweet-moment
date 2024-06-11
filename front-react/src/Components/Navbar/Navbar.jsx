import React, { useState } from 'react';
import './Navbar.css';

import logo from '../Assests/logo.jpeg';

const Navbar = () => {

  const[menu, setMenu] = useState("shop");

  return (
    <div className='navbar'> 
      <div className="nav-logo">
        <img src={logo} alt="Logo image" />
        <p>Sweet Moment</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("Men")}}>Men{menu==="Men"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("Women")}}>Women{menu==="Women"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("Kids")}}>Kids{menu==="Kids"?<hr/>:<></>} </li>
      </ul>
      <div className='nav-login-cart'>
        <button>Login</button>
        <span className='nav-cart-span'><i class="fa-solid fa-cart-shopping nav-cart-image"></i></span>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
