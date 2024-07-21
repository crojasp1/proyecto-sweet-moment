import React from 'react';
import "./NewsLetter.css";

// Componente funcional NewsLetter
const NewsLetter = () => {
  return (
    // Contenedor principal de la sección de newsletter
    <div className='newsletter'>
      
      {/* Título que invita a suscribirse */}
      <h1>Get Exclusive Offers On Your Email</h1>
      
      {/* Descripción de la suscripción */}
      <p>Subscribe to our newsletter and stay updated</p>
      
      {/* Sección de entrada de correo electrónico y botón */}
      <div>
        <input type="email" placeholder='Escriba su Email aqui'/>
        <button>Suscríbete</button>
      </div>
    </div>
  )
}

export default NewsLetter;

