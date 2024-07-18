import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../Assests/logo.jpeg';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

  const[menu, setMenu] = useState("shop");
  const {getTotalCartItems}= useContext(ShopContext);

  return (
    <div className='navbar'> 
      <div className="nav-logo">
        <img src={logo} alt="Logo image" />
        <p>Sweet Moment</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("Tienda")}}><Link to='/' className='nav-link' style={{textDecoration:'none'}}>Tienda</Link>{menu==="Tienda"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("Juguetes")}}><Link to='/juguetes' className='nav-link' style={{textDecoration:'none'}}>Juguetes</Link>{menu==="Juguetes"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("Lubricantes")}}><Link to='/lubricantes' className='nav-link' style={{textDecoration:'none'}}>Lubricantes</Link>{menu==="Lubricantes"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("Lenceria")}}><Link to='/lenceria' className='nav-link' style={{textDecoration:'none'}}>Lenceria</Link>{menu==="Lenceria"?<hr/>:<></>} </li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><span className='nav-cart-span'><i class="fa-solid fa-cart-shopping nav-cart-image"></i></span></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
