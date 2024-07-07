import React from 'react';
import "./Bradcrum.css";

const Breadcrum = (props) => {
  const {product} = props;
  return (
    <div className='breadcrum'>
      Tienda <img src="" alt="Arrow Icon" /> Shop <img src="Arrow Icon" alt="" /> {product.category} <img src="" alt="Arrow Icon" /> {product.name}
    </div>
  )
}

export default Breadcrum
