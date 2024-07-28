import React from 'react';
import "./DescriptionBox.css";

// Componente funcional DescriptionBox
const DescriptionBox = () => {
  return (
    // Contenedor principal del cuadro de descripción
    <div className='descriptionbox'>
      
      {/* Navegador dentro del cuadro de descripción */}
      <div className="descriptionbox-navigator">
        
        {/* Caja de navegación con la etiqueta "Descripción" */}
        <div className="descriptionbox-nav-box">
          Descripción
        </div>
        
        {/* Caja de navegación con la etiqueta "Vistas (122)" */}
        <div className="description-nav-box fade">
          Vistas (122)
        </div>
        
        {/* Contenedor para la descripción del sitio web de comercio electrónico */}
        <div className="descriptionbox-description">
          <p>Un sitio web de comercio electrónico es una plataforma en línea que facilita
            compra y venta de productos o servicios a través de internet
            sirve como un mercado virtual donde empresas e individuos
            mostrar sus productos, interactuar con los clientes y realizar
            transacciones sin necesidad de presencia física. comercio electrónico
            Los sitios web han ganado una inmensa popularidad debido a su conveniencia.
            accesibilidad y el alcance global que ofrecen.
          </p>
          <p>
            {/* Espacio para más contenido o párrafos adicionales */}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DescriptionBox
