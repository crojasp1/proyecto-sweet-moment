import React from 'react';
import "./Bradcrum.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Componente Breadcrum para mostrar la ruta de navegación de un producto
const Breadcrum = (props) => {
  // Desestructurando product de props
  const { product } = props;

  return (
    // Contenedor para la navegación breadcrumb
    <div className='breadcrum'>
      {/* Texto estático para el inicio del breadcrumb */}
      Tienda 
      {/* Marcador de posición para el icono de flecha */}
      <FontAwesomeIcon icon={faChevronRight}/>
      {/* Texto estático para la sección de la tienda */}
      Shop 
      {/* Marcador de posición para el icono de flecha */}
      <FontAwesomeIcon icon={faChevronRight}/>
      {/* Categoría dinámica del producto */}
      {product.category} 
      {/* Marcador de posición para el icono de flecha */}
      <FontAwesomeIcon icon={faChevronRight}/> 
      {/* Nombre dinámico del producto */}
      {product.name}
    </div>
  );
}

export default Breadcrum;
