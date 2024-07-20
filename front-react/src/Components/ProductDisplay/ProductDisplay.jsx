import React, { useContext } from 'react';
import './productdisplay.css';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext); // Importar la función del contexto

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="Product image" />
          <img src={product.image} alt="Product image" />
          <img src={product.image} alt="Product image" />
          <img src={product.image} alt="Product image" />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <span><i className="fa-solid fa-star"></i></span>
          <span><i className="fa-solid fa-star"></i></span>
          <span><i className="fa-solid fa-star"></i></span>
          <span><i className="fa-solid fa-star"></i></span>
          <span><i className="fa-regular fa-star"></i></span>
          <p>122</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          Talla única 
          Media liguero lisa con encaje y banda de silicona para agarre Perfecto a tu pierna.  
          Color : Negra, blanca o roja 
        </div>
        <div className="productdisplay-right-size">
          <h1>Seleccionar talla</h1>
          <div className='productdisplay-right-size'>
            <div>Talla unica</div>
          </div>
        </div>
        <button onClick={() => addToCart(product.id)}>ADD TO CART</button> {/* Llamar a la función con el ID del producto */}
        <p className='productdisplay-right-category'><span>Category:</span>Lenceria</p>
      </div> 
    </div>
  )
}

export default ProductDisplay;
