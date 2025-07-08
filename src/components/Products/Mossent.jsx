import React, { useState, useEffect } from 'react';
import { color, motion } from 'framer-motion';
import '../Products/Mossent.css';

const Mossent = () => {
  const [quantity, setQuantity] = useState(1);
  
  // Handle quantity changes
  const handleQuantityChange = (type) => {
    if (type === 'increment') {
      setQuantity(prev => prev + 1);
    } else if (type === 'decrement' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        {/* Product Image Section */}
        <motion.div 
          className="product-image-container"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="badge-container">
            <span className="badge natural-badge">100% Natural</span>
            <span className="badge deef-free-badge">DEEF-Free</span>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
            alt="Mossent Natural Mosquito Repellent" 
            className="product-image"
          />
        </motion.div>
        
        {/* Product Info Section */}
        <motion.div 
          className="product-info"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="product-name">Mossent – Natural Mosquito Repellent</h1>
          
          <p className="product-tagline">Plant-based protection for hours of mosquito-free comfort</p>
          
          <div className="price-container">
            <span className="price">Rs. 500</span>
            <span className="original-price">Rs. 650</span>
            <span className="discount">23% OFF</span>
          </div>
          
          <div className="product-description">
            <p>
              Mossent is a plant-based mosquito repellent formulated to keep mosquitoes away for hours 
              using safe, natural ingredients. It's completely DEFT-free yet highly effective – Mossent 
              uses oil of lemon eucalyptus, an essential oil approved by the CDC as an effective mosquito repellent.
            </p>
          </div>
          
          <div className="features-container">
            <div className="feature">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <span>DEEF-Free</span>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <span>100% Natural</span>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <span>Family Safe</span>
            </div>
          </div>
          
          <div className="quantity-selector">
            <span>Quantity:</span>
            <div className="quantity-controls">
              <button 
                className="quantity-btn" 
                onClick={() => handleQuantityChange('decrement')}
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="quantity">{quantity}</span>
              <button 
                className="quantity-btn" 
                onClick={() => handleQuantityChange('increment')}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>
          
          <motion.button 
            className="add-to-cart-btn"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Add to Cart - Rs. {500 * quantity}
          </motion.button>
          
          <div className="additional-info">
            <div className="info-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              <span>100% natural ingredients, safe for children</span>
            </div>
            <div className="info-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              <span>Secure checkout with SSL encryption</span>
            </div>
            <div className="info-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12.55a11 11 0 0114.08 0" />
                <path d="M1.42 9a16 16 0 0121.16 0" />
                <path d="M8.53 16.11a6 6 0 016.95 0" />
                <circle cx="12" cy="20" r="1" />
              </svg>
              <span>Free shipping on orders over Rs. 2000</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Mossent;