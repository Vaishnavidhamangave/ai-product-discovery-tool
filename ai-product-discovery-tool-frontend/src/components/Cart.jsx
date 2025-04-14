import React, { useState } from 'react';
import './Cart.css';

const initialItems = [
  {
    id: 1,
    name: 'Eco Bamboo Cup',
    price: 1299,
    quantity: 2,
    imageUrl: 'https://images.pexels.com/photos/7303870/pexels-photo-7303870.jpeg'
  },
  {
    id: 2,
    name: 'Reusable Shopping Bag',
    price: 799,
    quantity: 1,
    imageUrl: 'https://images.pexels.com/photos/4856590/pexels-photo-4856590.jpeg'
  }
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialItems);

  const increaseQty = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is feeling lonely. 🥲</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.imageUrl} alt={item.name} className="item-image" />
                <div className="item-info">
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                  <div className="qty-controls">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>
                </div>
                <div className="item-total">₹{item.price * item.quantity}</div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <p className="subtotal">
              <strong>Subtotal:</strong> ₹{subtotal}
            </p>
            {subtotal >= 2000 && (
              <p className="free-shipping">🎉 You’ve unlocked FREE shipping!</p>
            )}
            <div className="summary-buttons">
              <button className="checkout-button">Proceed to Checkout</button>
              <button className="clear-button" onClick={clearCart}>Clear Cart</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
