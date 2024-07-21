import React from 'react';
import "./NewCollections.css";

// Componente funcional NewCollections
const NewCollections = () => {
  return (
    // Contenedor principal de la sección de nuevas colecciones
    <div className='new-collections'>
      
      {/* Título de la sección */}
      <h1>NEW COLLECTIONS</h1>
      
      {/* Línea horizontal debajo del título */}
      <hr />
      
      {/* Contenedor para las colecciones */}
      <div className="collections">
        {/* Aquí se pueden agregar elementos de colección */}
      </div>
    </div>
  )
}

export default NewCollections;

