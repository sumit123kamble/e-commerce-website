import React from "react";
import { useCart } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
  } = useCart();

  if (!cartItems || cartItems.length === 0) {
    return <h2 className="cart-title">Your cart is empty 🛒</h2>;
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>

      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} className="cart-img" />

          <div className="cart-info">
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <div className="qty-controls">
              <button
                className="qty-btn"
                onClick={() => decreaseQuantity(item.id)}
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                className="qty-btn"
                onClick={() => increaseQuantity(item.id)}
              >
                +
              </button>
            </div>

            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              Remove Item
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
