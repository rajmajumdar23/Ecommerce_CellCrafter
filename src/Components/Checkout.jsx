import React, { useState } from 'react';

const Checkout = ({ cart, total, clearCart }) => {
  const [formData, setFormData] = useState({ name: '', address: '', payment: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the checkout process, e.g., send data to a server
    console.log('Checkout form submitted:', formData);
    clearCart();
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
        </div>
        <div>
          <label>Payment:</label>
          <input type="text" value={formData.payment} onChange={(e) => setFormData({ ...formData, payment: e.target.value })} />
        </div>
        <button type="submit">Place Order</button>
      </form>
      <p>Total: ${total}</p>
    </div>
  );
};

export default Checkout;
