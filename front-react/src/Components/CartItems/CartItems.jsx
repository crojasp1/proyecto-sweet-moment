import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assests/cart_cross_icon.png'

// Use context para acceder a los valores del contexto
const CartItems = () => {
  // Extraer funciones y valores del contexto de la tienda
  const { getTotalCartAmount, all_products, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        {/* Encabezados de la tabla de productos en el carrito */}
        <p>Productos</p>
        <p>Título</p>
        <p>Precio</p>
        <p>Cantidad</p>
        <p>Total</p>
        <p>Eliminar</p>
      </div>
      <hr />

      {/* Iterar sobre todos los productos */}
      {all_products.map((e) => {
        // Mostrar solo los productos que están en el carrito
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                {/* Imagen del producto */}
                <img src={e.image} alt="" className='carticon-product-icon' />
                {/* Nombre del producto */}
                <p>{e.name}</p>
                {/* Precio unitario del producto */}
                <p>${e.new_price}</p>
                {/* Cantidad del producto en el carrito */}
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                {/* Precio total por producto en el carrito */}
                <p>${e.new_price * cartItems[e.id]}</p>
                {/* Icono para eliminar el producto del carrito */}
                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
              </div>
              <hr />
            </div>
          )
        }
        return null;
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          {/* Mostrar el total de la compra */}
          <h1>Total compras</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              {/* Subtotal calculado */}
              <p>${getTotalCartAmount()}</p>  
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Envío</p>
              {/* Texto para envío gratuito */}
              <p>Gratis</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              {/* Total calculado incluyendo todos los productos */}
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          {/* Botón para proceder a la compra */}
          <button>proceder a compra</button>    
        </div>

        <div className="cartitems-promcode">
          {/* Sección para ingresar código de promoción */}
          <p>Si tienes un código de promoción ingrésalo aquí</p>
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
