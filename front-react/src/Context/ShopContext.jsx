import React, { createContext, useState } from "react";
import all_products from "../Components/Assests/all_products.jsx";

// 1. Creamos el contexto con createContext();
export const ShopContext = createContext(null);

// Función para obtener el carrito de compras por defecto
const getDefaultCart = () => {
  let cart = {};
  // Inicializamos el carrito con la cantidad de productos disponibles (por defecto en 0)
  for (let index = 0; index < all_products.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
}

// 2. Creamos el proveedor del contexto (ShopContextProvider)
const ShopContextProvider = (props) => {
  
  // Estado para mantener los ítems del carrito
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Función para añadir un producto al carrito
  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
  }

  // Función para eliminar un producto del carrito
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
  }

  // Función para obtener el monto total del carrito
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    // Recorremos los ítems del carrito
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        // Encontramos la información del producto usando su ID
        let itemInfo = all_products.find((product) => product.id === Number(item));
        // Calculamos el total sumando el precio de los productos multiplicado por su cantidad
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  }

  // Función para obtener el número total de ítems en el carrito
  const getTotalCartItems = () => {
    let totalItem = 0;
    // Recorremos los ítems del carrito
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        // Sumamos la cantidad de ítems al total
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }

  // Valores del contexto que se proporcionan a los componentes hijos
  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_products,
    cartItems,
    addToCart,
    removeFromCart
  };

  return (
    // Proveedor del contexto con los valores definidos
    <ShopContext.Provider value={contextValue}>
      {props.children} {/* Renderiza los componentes hijos que usan el contexto */}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
