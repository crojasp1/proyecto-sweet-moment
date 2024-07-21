import React from 'react';
import "./RelatedProducts.css";

// Componente funcional RelatedProducts
const RelatedProducts = () => {
  return (
    // Contenedor principal de la sección de productos relacionados
    <div className='relatedproducts'>
      
      {/* Título de la sección */}
      <h1>Productos relacionados</h1>
      
      {/* Línea horizontal debajo del título */}
      <hr />
      
      {/* Contenedor para los productos relacionados */}
      <div className='relatedproducts-item'>
        {/* Aquí se pueden agregar los productos relacionados */}
      </div>
    </div>
  )
}

export default RelatedProducts;
