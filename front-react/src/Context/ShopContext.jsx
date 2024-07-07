import React, {createContext, useState} from "react";
import all_products from "../Components/Assests/all_products";

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
  let cart = {};
  for (let index = 0; index < all_products+1; index++){
    cart[index] = 0;
  }
  return cart;
}

const ShopContextProvider = (props) => {
  
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
      setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]:prev[itemId]}))
  }

  const contextValue = {all_products};
 

  return(
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;