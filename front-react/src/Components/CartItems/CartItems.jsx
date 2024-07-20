import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assests/cart_cross_icon.png'


//Use context para acceder a los valores del contexto{}
const CartItems = () => {
    const {getTotalCartAmount, all_products, cartItems,removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Productos</p>
        <p>Titulo</p>
        <p>Precio</p>
        <p>Cantidad</p>
        <p>Total</p>
        <p>Eliminar</p>
      </div>
      <hr />

      {all_products.map((e)=>{
        if(cartItems[e.id]>0){
         return <div key={e.id}>
         <div className="cartitems-format cartitems-format-main">
            <img src={e.image} alt="" className='carticon-product-icon' />
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
            <p>${e.new_price*cartItems[e.id]}</p>
            <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
         </div>
         <hr />
       </div>
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Total compras</h1>
            <div>
                <div className="cartitems-total-item">
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount()}</p>  
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Envio</p>
                    <p>Gratis</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>proceder a compra</button>    
        </div>
        <div className="cartitems-promcode">
            <p>Si tienes un codigo de promocion ingresalo aqui</p>
            <div className="cartitems-prombox">
                <input type="text" placeholder='promo code' />
                <button>Enviar</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems;
