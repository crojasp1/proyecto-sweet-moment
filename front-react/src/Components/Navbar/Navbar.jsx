import React, { useContext, useState } from 'react';
import { ShopContext } from "../../Context/ShopContext";
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../Assests/logo.jpeg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

// Componente funcional Navbar
const Navbar = () => {

  // Estado para el menú seleccionado
  const [menu, setMenu] = useState("shop");

  //Traemos el getTotalCartItems del contexto
  const {getTotalCartItems = () => 0} = useContext(ShopContext);

  return (
    // Contenedor principal de la barra de navegación
    <div className='navbar'> 
      
      {/* Sección del logo */}
      <div className="nav-logo">
        <img src={logo} alt="Logo image" />
        <p>Sweet Moment</p>
      </div>

      {/* Menú de navegación */}
      <ul className="nav-menu">
        {/* Elementos del menú */}
        <li onClick={() => { setMenu("Tienda") }}>
          <Link to='/' className='nav-link' style={{ textDecoration: 'none' }}>Tienda</Link>
          {menu === "Tienda" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("Juguetes") }}>
          <Link to='/juguetes' className='nav-link' style={{ textDecoration: 'none' }}>Juguetes</Link>
          {menu === "Juguetes" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("Lubricantes") }}>
          <Link to='/lubricantes' className='nav-link' style={{ textDecoration: 'none' }}>Lubricantes</Link>
          {menu === "Lubricantes" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("Lenceria") }}>
          <Link to='/lenceria' className='nav-link' style={{ textDecoration: 'none' }}>Lenceria</Link>
          {menu === "Lenceria" ? <hr /> : <></>}
        </li>
      </ul>

      {/* Sección de login y carrito */}
      <div className='nav-login-cart'>
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem("auth-token");window.location.replace('/')}}>Cerrar sesión</button>:<Link to='/login'><button>Login</button></Link>}
        
        <Link to='/cart'>
          <span className='nav-cart-span'>
            <FontAwesomeIcon icon={faCartShopping}/>
          </span>
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar;