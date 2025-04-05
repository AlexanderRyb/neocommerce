import React from 'react'
import './styles.css'
import { useContextStore } from "../../Context/CommerceContext"; 

const Cart = () => {
  const { cart } = useContextStore();

  if (cart.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div className="cart-view">
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.image} alt={item.description} className="cart-img" />
          <div className="cart-details">
            <p>{item.description}</p>
            <p>${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;