import React, { useContext } from "react";
import { ShopContext } from '../Context/ShopContext';
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Item from "../Components/Item/item";
import "./CSS/shop.css";

// Componente funcional Shop
const Shop = () => {

  const {filtered_products, searchProducts} = useContext(ShopContext);

  return (
    <div className={searchProducts ? "shop-products" : ''}>
    { searchProducts ? (

                filtered_products.map((item, i) => {
                  return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              })    

      )
      : 
      (
        <>
        {/* Renderiza el componente Hero, que suele mostrar una sección destacada */}
        <Hero/>
        
        {/* Renderiza el componente Popular, que muestra los productos más populares */}
        <Popular/>
        
        {/* Renderiza el componente Offers, que muestra ofertas exclusivas */}
        <Offers/>
        
        {/* Renderiza el componente NewsLetter, que permite suscribirse al boletín */}
        <NewsLetter/>
        </>        

    )}
    </div>


  )
}

export default Shop;
