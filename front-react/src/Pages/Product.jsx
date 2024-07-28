import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';

// Componente funcional Product
const Product = () => {
  // Usamos el contexto ShopContext para acceder a todos los productos
  const { all_products } = useContext(ShopContext);
  
  // Extraemos el ID del producto de la URL usando useParams
  const { productId } = useParams();
  
  // Encontramos el producto correspondiente al ID extraído de la URL
  const product = all_products.find((e) => e.id === Number(productId));

  return (
    <div>
      {/* Renderizamos el componente Breadcrum, pasando el producto como prop */}
      <Breadcrum product={product}/>
      
      {/* Renderizamos el componente ProductDisplay, pasando el producto como prop */}
      <ProductDisplay product={product}/>
      
      {/* Renderizamos el componente DescriptionBox */}
      <DescriptionBox/>
    </div>
  )
}

export default Product;
