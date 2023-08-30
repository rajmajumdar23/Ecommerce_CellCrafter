import React, { useState } from 'react';
import Modal from 'react-modal';
import '../Styling/ProductDetail.css';
import { FaTimes } from 'react-icons/fa';


Modal.setAppElement('#root');

const ProductDetail = ({ product, addToCart }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);


  const openModal = () => {
    setModalIsOpen(true);
  };


  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={product.image} className="img-fluid rounded-start" alt={product.name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <h5 className="card-price">Price: ₹{product.price}</h5>
            <div className="btn-group">
              <button onClick={() => addToCart(product)} className="btn btn-primary" id='addtocart'>Add to Cart</button>
              <button onClick={openModal} className="btn btn-secondary">Details</button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        className="Modal-Content"
        onRequestClose={closeModal}
        contentLabel="Product Details Modal"
      >
        <div className="modal-content">
          <button id="close-modal" onClick={closeModal} className="close-button">
            <FaTimes /> 
          </button>
          <img src={product.image} className="img-fluid rounded-start" alt={product.name} />
          <h2>{product.name}</h2>
          <h3>{product.price}</h3>
          <p className='product-lebels'>Display:- {product.display}</p>
          <p className='product-lebels'>Processor:- {product.processor}</p>
          <p className='product-lebels'>Ram:- {product.ram}</p>
          <p className='product-lebels'>Storage:- {product.storage}</p>
          <p className='block'>{product.description}</p>
        </div>
      </Modal>
    </div>
  );
};

export default ProductDetail;
