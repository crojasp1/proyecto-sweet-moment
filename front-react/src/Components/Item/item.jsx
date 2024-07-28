import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

// Componente funcional Item
const Item = (props) => {
  return (
    // Contenedor principal del ítem
    <div className='item'>
      
      {/* Enlace a la página del producto con su imagen */}
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="Product image" />
      </Link>
      
      {/* Nombre del producto */}
      <p>{props.name}</p>
      
      {/* Sección de precios del producto */}
      <div className="item-prices">
        
        {/* Precio nuevo del producto */}
        <div className="item-prices-new">
          ${props.new_price}
        </div>
        
        {/* Precio antiguo del producto */}
        <div className='item-price-old'>
          ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item;
