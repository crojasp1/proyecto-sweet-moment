import React, {createContext, useState} from "react";
import all_products from "../Components/Assests/all_products.jsx";

//1. Creamos el contexto con createContext();
export const ShopContext = createContext(null);

const getDefaultCart = () =>{
  let cart = {};
  for (let index = 0; index < all_products.length+1; index++){
    cart[index] = 0;
  }
  return cart;
}

//2. Creamos el proveedor del contexto (Componentes hijos mediante ShopContextProvider)
const ShopContextProvider = (props) => {
  
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
  setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
  }

  const removeFromCart = (itemId) => {
  setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems)
    {
       if(cartItems[item]>0)
       {
          let itemInfo = all_products.find((product)=>product.id===Number(item))
          totalAmount += itemInfo.new_price * cartItems[item];
       }
       return totalAmount;
    }  
  }

  const getTotalCartItems = () =>{
    let totalItem = 0;
    for(const item in cartItems)
    {
      if(cartItems[item]>0)
      {
        totalItem=+ cartItems[item];
      }
    }
    return totalItem;
  }

  //Valores del contexto:

  const contextValue = {getTotalCartItems, getTotalCartAmount, all_products, cartItems,addToCart,removeFromCart};
 

  return(
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;