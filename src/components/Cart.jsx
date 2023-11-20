import React, { useState } from 'react';
import NavBar from './NavBar';
import Button from './Button';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Item 1', price: 20, quantity: 2 },
    { id: 2, name: 'Item 2', price: 15, quantity: 1 },
  ]);

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <NavBar />
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <p>{item.name}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
        <p className="total-amount">Total: ${totalAmount}</p>
        <Button className="checkout-button" label="CHECKOUT" />
      </div>
    </>
  );
};

export default Cart;
