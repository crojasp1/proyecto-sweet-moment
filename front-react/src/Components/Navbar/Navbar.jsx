import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
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
        <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("Men")}}><Link to='/mens'>Men</Link>{menu==="Men"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("Women")}}><Link to='/womens'>Women</Link>{menu==="Women"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("Kids")}}><Link to='/kids'>Kids</Link>{menu==="Kids"?<hr/>:<></>} </li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><span className='nav-cart-span'><i class="fa-solid fa-cart-shopping nav-cart-image"></i></span></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
