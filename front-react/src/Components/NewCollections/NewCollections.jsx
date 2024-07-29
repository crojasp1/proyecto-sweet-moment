import React from 'react';
import "./NewCollections.css";
import { useState } from 'react';

// Componente funcional NewCollections
const NewCollections = () => {
  const [new_collection, setNew_collection] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/newcollections")
    .then((response) => response.json())
    .then(data => setNew_collection(data));
  }, []);

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

