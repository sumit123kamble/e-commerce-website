import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About FoodHub</h3>
          <p>Your trusted source for premium jams, sauces, and sweets. Quality food products delivered to your doorstep.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="/shipping">Shipping Info</a></li>
            <li><a href="/policy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📧 kamblesumit2001@gmail.com</p>
          <p>📞 +91 1234567890</p>
          <p>📍 Pandharpur, Maharashtra, India</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 FoodHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;