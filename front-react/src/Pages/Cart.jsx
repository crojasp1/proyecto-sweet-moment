import React from 'react';
import CartItems from '../Components/CartItems/CartItems';

// Componente funcional Cart
const Cart = () => {
  return (
    <div>
      {/* Renderiza el componente CartItems, que muestra los ítems en el carrito */}
      <CartItems />
    </div>
  )
}

export default Cart;

