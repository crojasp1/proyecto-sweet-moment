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
  const {getTotalCartItems = () => 0, searchProducts, setSearchProducts} = useContext(ShopContext);

  function handleOptionsClick(event){
    setMenu(event.target.text);
    setSearchProducts("");

  }


  return (
    // Contenedor principal de la barra de navegación
    <div className='header'>
      <div className='navbar'> 
        
        {/* Sección del logo */}
        <div className="nav-logo">
          <img src={logo} alt="Logo image" />
          <p>Sweet Moment</p>
        </div>

        {/* Menú de navegación */}
        <div className='navbar-menus'>
          <input type="text" placeholder='Buscar productos, marcas y mas'
                  value={searchProducts} onChange={(event) => setSearchProducts(event.target.value)}/>
          <ul className="nav-menu">
            {/* Elementos del menú */}
            <li onClick={handleOptionsClick}>
              <Link to='/' className='nav-link' style={{ textDecoration: 'none' }}>Tienda</Link>
              {menu === "Tienda" ? <hr /> : <></>}
            </li>
            <li onClick={handleOptionsClick}>
              <Link to='/juguetes' className='nav-link' style={{ textDecoration: 'none' }}>Juguetes</Link>
              {menu === "Juguetes" ? <hr /> : <></>}
            </li>
            <li onClick={handleOptionsClick}>
              <Link to='/lubricantes' className='nav-link' style={{ textDecoration: 'none' }}>Lubricantes</Link>
              {menu === "Lubricantes" ? <hr /> : <></>}
            </li>
            <li onClick={handleOptionsClick}>
              <Link to='/lenceria' className='nav-link' style={{ textDecoration: 'none' }}>Lenceria</Link>
              {menu === "Lenceria" ? <hr /> : <></>}
            </li>
          </ul>
        </div>


        {/* Sección de login y carrito */}
        <div className='nav-login-cart'>
          {localStorage.getItem('auth-token')
          ?<button onClick={()=>{localStorage.removeItem("auth-token");window.location.replace('/')}}>Cerrar sesión</button>:<Link to='/login'><button>Login</button></Link>}
          
          <Link to='/cart'>
            <span className='nav-cart-span'>
              <FontAwesomeIcon icon={faCartShopping} className='loginCart-icon' />
            </span>
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;