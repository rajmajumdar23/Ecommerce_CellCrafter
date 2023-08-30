import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../Styling/Cart.css';

const Cart = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart }) => {
  const navigate = useNavigate();

  const formatPrice = (priceString) => {
    return parseFloat(priceString.replace('₹', '').replace(',', '').trim());
  };

  const totalCartPrice = cart.reduce((total, item) => total + formatPrice(item.price) * item.quantity, 0);

  const handleBuyNowClick = () => {
    navigate('/oc');
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <p>You have <strong>{cart.reduce((total, item) => total + item.quantity, 0)}</strong> products in your cart.</p>
          <div>
            <p>Total Cart Price: <strong>₹{totalCartPrice.toFixed(2)}</strong></p>
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {cart.map((item) => (
              <div className="col" key={item.id}>
                <div className="card mb-3" id='card'>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <button id='trash-btn' onClick={() => removeFromCart(item)}>
                        <FaTrash color="red" />
                      </button>
                      <img src={item.image} alt={item.name} className="img-fluid" id='cart-img' />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <p id='prd-title' className="card-title">{item.name}</p>
                        <p id='prd-brand' className="card-title">Brand: {item.brand}</p>
                        <p id='prd-storage' className="card-storage">Storage: {item.ram} + {item.storage}</p>
                        <p id='prd-price' className="card-title"><strong>₹{item.price}</strong></p>
                        <div className="quantity-controls">
                          <button id='cart-btn1' onClick={() => decreaseQuantity(item)}>
                            <AiOutlineMinus />
                          </button>
                          <p id='cart-quantity' className="card-title">{item.quantity}</p>
                          <button id='cart-btn2' onClick={() => increaseQuantity(item)}>
                            <AiOutlinePlus />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      <button id='clearcart' onClick={clearCart}>Clear Cart</button>
      <button id='buynow' onClick={handleBuyNowClick}>Buy Now</button>
    </div>
  );
};

export default Cart;
