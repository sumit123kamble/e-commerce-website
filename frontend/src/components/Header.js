import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">

        <div className="logoName">
        <Link to="/" className="logo-btn">
          <img
            src="/images/icon.png"
            alt="FoodHub Logo"
            className="logo"
          />
          <div>
            <h1>FoodHub</h1>
            <p className="tagline">Fresh Jams, Sauces & Sweets</p>
          </div>
          </Link>
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
          <a href="/Cart"><button className="btn-cart" >🛒 Cart</button></a>
          <a href="/Login"><button className="btn-login">Login</button></a>
        </div>

      </div>
    </header>
  );
};

export default Header;
