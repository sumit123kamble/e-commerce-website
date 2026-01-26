import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>FoodHub</h1>
          <p className="tagline">Fresh Jams, Sauces & Sweets</p>
        </div>
        
        <nav className="nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        
        <div className="header-actions">
          <button className="btn-search">🔍</button>
          <button className="btn-cart">🛒 Cart (0)</button>
          <button className="btn-login">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;