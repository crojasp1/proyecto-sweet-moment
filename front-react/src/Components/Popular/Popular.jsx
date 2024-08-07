import React from 'react';
import './Popular.css';

import Item from '../Item/item';
import { useState } from 'react';
import { useEffect } from 'react';

// Componente funcional Popular
const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:4000/popularinlenceria")
    .then((response)=>response.json())
    .then(data => setPopularProducts(data))
  },[]);

  return (
    // Contenedor principal de la sección de productos populares
    <div className='popular'>
      
      {/* Título de la sección */}
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      
      {/* Contenedor de ítems populares */}
      <div className="popular-item">
        
        {/* Mapeo de datos de productos para renderizar ítems */}
        {popularProducts.map((item, i) => {
          return (
            <Item 
              key={i} 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  )
}

export default Popular;

