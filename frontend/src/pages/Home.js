import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredProducts = [
    {
      name: 'Strawberry Jam',
      description: 'Made with fresh, handpicked strawberries',
      icon: '🍓',
      color: '#D4756F'
    },
    {
      name: 'Classic Ketchup',
      description: 'Rich, tangy tomato perfection',
      icon: '🍅',
      color: '#E67E50'
    },
    {
      name: 'Schezwan Chutney',
      description: 'Spicy and flavorful authentic taste',
      icon: '🌶️',
      color: '#B85C4C'
    },
    {
      name: 'Mixed Pickle',
      description: 'Traditional homemade recipe',
      icon: '🥒',
      color: '#8B956D'
    }
  ];

  const features = [
    {
      icon: '🌱',
      title: 'Natural Ingredients',
      description: 'No artificial preservatives or colors'
    },
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Fresh products delivered to your door'
    },
    {
      icon: '⭐',
      title: 'Premium Quality',
      description: 'Handcrafted with love and care'
    },
    {
      icon: '💯',
      title: 'Satisfaction Guaranteed',
      description: '30-day money-back guarantee'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div 
          className="hero-background"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <img 
            src="/images/img2.png" 
            alt="FoodHub Banner" 
            className="home-banner"
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">Fresh & Natural</div>
          <h1 className="hero-title">
            Welcome to
            <span className="hero-brand"> FoodHub</span>
          </h1>
          <p className="hero-subtitle">
            Your favorite food products, delivered fresh to your doorstep!
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">
              Shop Now
              <span className="btn-arrow">→</span>
            </button>
            <button className="btn-secondary">Explore Products</button>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section">
        <div className="section-header">
          <h2 className="section-title">Our Bestsellers</h2>
          <p className="section-subtitle">
            Handcrafted with love, delivered with care
          </p>
        </div>

        <div className="products-grid">
          {featuredProducts.map((product, index) => (
            <div 
              key={index} 
              className="product-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="product-icon-wrapper"
                style={{ backgroundColor: `${product.color}20` }}
              >
                <span className="product-icon">{product.icon}</span>
              </div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <button className="product-btn">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Experience the Difference?</h2>
          <p className="cta-text">
            Join thousands of happy customers who trust us for quality food products
          </p>
          <button className="cta-button">
            Start Shopping
            <span className="cta-arrow">→</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;