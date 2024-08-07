import React, { useContext } from "react";
import "./productdisplay.css";
import { ShopContext } from "../../Context/ShopContext";

// Componente funcional ProductDisplay
const ProductDisplay = (props) => {
  const { product } = props; // Extraer el producto de las props
  const { addToCart } = useContext(ShopContext); // Obtener la función addToCart del contexto

  return (
    // Contenedor principal de la visualización del producto
    <div className="productdisplay">
      {/* Sección izquierda para las imágenes del producto */}
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {/* Lista de imágenes en miniatura */}
          <img src={product.image} alt="Product image" />
          <img src={product.image} alt="Product image" />
          <img src={product.image} alt="Product image" />
          <img src={product.image} alt="Product image" />
        </div>
        <div className="productdisplay-img">
          {/* Imagen principal del producto */}
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>

      {/* Sección derecha para detalles del producto */}
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          {/* Estrellas de calificación del producto */}
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
          <span>
            <i className="fa-regular fa-star"></i>
          </span>
          <p>122</p>
        </div>
        <div className="productdisplay-right-prices">
          {/* Precios viejo y nuevo del producto */}
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          {/* Descripción del producto */}
          Talla única Media liguero lisa con encaje y banda de silicona para
          agarre Perfecto a tu pierna. Color : Negra, blanca o roja
        </div>
        <div className="productdisplay-right-size">
          <h1>Seleccionar talla</h1>
          <div className="productdisplay-right-size">
            <p>Talla única</p>
          </div>
        </div>
        {/* Botón para añadir al carrito, llamando a la función addToCart con el ID del producto */}
        <button
          className="addToCart-button"
          onClick={() => addToCart(product.id)}
     
        >
          AGREGAR A CARRITO
        </button>
        <p className="productdisplay-right-category">
          <span>Category: </span>Lenceria
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
