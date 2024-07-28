import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

// Componente funcional Shop
const Shop = () => {
  return (
    <div>
      {/* Renderiza el componente Hero, que suele mostrar una sección destacada */}
      <Hero/>
      
      {/* Renderiza el componente Popular, que muestra los productos más populares */}
      <Popular/>
      
      {/* Renderiza el componente Offers, que muestra ofertas exclusivas */}
      <Offers/>
      
      {/* Renderiza el componente NewsLetter, que permite suscribirse al boletín */}
      <NewsLetter/>
    </div>
  )
}

export default Shop;
