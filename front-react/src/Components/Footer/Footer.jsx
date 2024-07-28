import React from 'react';
import "./Footer.css";

// Importación de logotipos de redes sociales y logo de la tienda
import instagram_logo from "../Assests/socials_logo/instagram_logo.webp";
import face_logo from "../Assests/socials_logo/facebook_logo.jpg";
import x_logo from "../Assests/socials_logo/x_logo.webp";
import sweetMoment_logo from "../Assests/logo.jpeg";

// Componente funcional Footer
const Footer = () => {
  return (
    // Contenedor principal del pie de página
    <div className='footer'>

      {/* Sección del logo de la tienda */}
      <div className="footer-logo">
        <img src={sweetMoment_logo} alt="logo de la tienda" />
        <p>Sweet Moment</p>
      </div>

      {/* Lista de enlaces del pie de página */}
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      {/* Sección de iconos de redes sociales */}
      <div className="footer-socials-icon">
        <div className="footer-icons-container">
          <img src={instagram_logo} alt="Instagram logo" />
        </div>
        <div className="footer-icons-container">
          <img src={face_logo} alt="Facebook logo" />
        </div>
        <div className="footer-icons-container">
          <img src={x_logo} alt="Twitter logo" />
        </div>
      </div>

      {/* Sección de derechos de autor */}
      <div className="footer-copyright">
        <hr/>
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>

    </div>
  )
}

export default Footer;
