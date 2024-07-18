import React, {createContext, useState} from "react";
import all_products from "../Components/Assests/all_products";

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
  let cart = {};
<<<<<<< HEAD
  for (let index = 0; index < all_products+1; index++){
=======
  for (let index = 0; index < all_products.lenght+1; index++){
>>>>>>> admin-camiloRojasDev
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

<<<<<<< HEAD
  const contextValue = {all_products};
=======
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

  const contextValue = {getTotalCartItems,getTotalCartAmount,all_products,cartItems,addToCart,removeFromCart};
>>>>>>> admin-camiloRojasDev
 

  return(
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;