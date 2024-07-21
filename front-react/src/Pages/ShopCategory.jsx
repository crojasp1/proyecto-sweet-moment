import React, { useContext } from 'react';
import "./CSS/ShopCategory.css";  // Importa los estilos CSS específicos para este componente.
import { ShopContext } from '../Context/ShopContext';  // Importa el contexto que proporciona datos de la tienda.
import Item from '../Components/Item/item';  // Importa el componente Item para mostrar los productos.
import all_products from "../Components/Assests/all_products";  // Importa la lista de todos los productos.

const ShopCategory = (props) => {
  // Usa el hook useContext para acceder a los datos del contexto ShopContext.
  const { all_products } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      {/* Muestra una imagen de banner para la categoría, cuyo URL se pasa como prop */}
      <img className='shopcategory-banner' src={props.banner} alt="Banner image" />

      {/* Sección para mostrar el rango de productos visibles y la opción de ordenar */}
      <div className="shopCategory-indexSort">
        <p>
          {/* Muestra el rango de productos que se están mostrando y el total de productos */}
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          {/* Opción para ordenar los productos */}
          Ordenar por <span><i className="fa-solid fa-arrow-turn-down"></i></span>
        </div>
      </div>

      {/* Sección para mostrar los productos filtrados por la categoría */}
      <div className='shopcategory-products'>
        {all_products.map((item, i) => {
          // Filtra los productos que coinciden con la categoría pasada como prop
          if (props.category === item.category) {
            // Renderiza un componente Item para cada producto de la categoría seleccionada
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          } else {
            // Si el producto no coincide con la categoría, no se renderiza nada
            return null;
          }
        })}
      </div>

      {/* Botón para explorar más productos */}
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory;
