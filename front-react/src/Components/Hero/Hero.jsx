import React from "react";
import "./Hero.css";

// Importación de imágenes y iconos
import heroBackImage from "../Assests/heroBackImage.jpg";
import right_arrow from '../Assests/right_arrow.png';
import domi_lush from "../Assests/domi_lush.png";

// Componente funcional Hero
const Hero = () => {
  return (
    // Contenedor principal de la sección Hero
    <div className="hero">
      
      {/* Sección izquierda del Hero */}
      <div className="hero-left">

        {/* Título de la sección */}
        <h2>NEW ARRIVALS ONLY</h2>

        {/* Imagen de productos */}
        <img src={domi_lush} alt="Lush and domi image" />

        {/* Texto y mensaje de productos nuevos */}
        <div>
          <div className="new-product-icon">
            <p>Here all</p>
          </div>
          <p>New</p>
          <p> For U</p>
        </div>

        {/* Botón para la última colección */}
        <div className="hero-latest-btn">
          <div>Lastest Collection</div>
          <img src={right_arrow} alt="Right Arrow icon" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
