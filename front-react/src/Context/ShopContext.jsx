import React, { createContext, useState } from "react";
import { useEffect } from "react";


// 1. Creamos el contexto con createContext();
export const ShopContext = createContext({});

// Función para obtener el carrito de compras por defecto
const getDefaultCart = () => {
  let cart = {};
  // Inicializamos el carrito con la cantidad de productos disponibles (por defecto en 0)
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
}

// 2. Creamos el proveedor del contexto (ShopContextProvider)
const ShopContextProvider = (props) => {
  
  // Estado para mantener los ítems del carrito
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Almacenador de todos los productos
  const [all_products, setAll_Products] = useState([]);

  // Estado para buscar productos
  const [searchProducts, setSearchProducts] = useState("");

  useEffect(()=>{
    fetch('http://localhost:4000/allproducts')
    .then((response)=>response.json())
    .then((data)=>setAll_Products(data));

    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:4000/getcart',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Contant-Type':'application/json'
        },
        body:"",
      }).then(response => response.json())
      .then((data) => setCartItems(data));
    }
  },[])

  // Función para añadir un producto al carrito
  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:4000/addtocart',{
        method: 'POST',
        headers:{
          Accept: 'application/json',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',

        },
        body:JSON.stringify({"itemId":itemId})
    })
    .then((response) => response.json())
    .then((data) => console.log(data));
    }
  }

  // Función para eliminar un producto del carrito
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:4000/removefromcart',{
        method: 'POST',
        headers:{
          Accept: 'application/json',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',

        },
        body:JSON.stringify({"itemId":itemId})
    })
    .then((response) => response.json())
    .then((data) => console.log(data));
    }
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

  //Creando estado derivado para guardar filtros de los productos a mostrar
  
  const filtered_products = all_products.filter((products) => {
    return products.name.toLowerCase().includes(searchProducts.toLocaleLowerCase());
  });

  // Valores del contexto que se proporcionan a los componentes hijos
  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    filtered_products,
    searchProducts,
    setSearchProducts
  };

  return (
    // Proveedor del contexto con los valores definidos
    <ShopContext.Provider value={contextValue}>
      {props.children} {/* Renderiza los componentes hijos que usan el contexto */}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
