import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      image: '/images/Strawberryjam.png',
      price: '₹149',
      rating: 4.8,
      reviews: 124,
      tag: 'Bestseller',
    },
    {
      name: 'Classic Ketchup',
      description: 'Rich, tangy tomato perfection',
      image: '/images/ketcup.png',
      price: '₹99',
      rating: 4.6,
      reviews: 98,
      tag: 'Popular',
    },
    {
      name: 'Schezwan Chutney',
      description: 'Spicy and flavorful authentic taste',
      image: '/images/shezwan.png',
      price: '₹129',
      rating: 4.9,
      reviews: 210,
      tag: 'Hot Pick',
    },
    {
      name: 'Mixed Pickle',
      description: 'Traditional homemade recipe',
      image: '/images/pickle.png',
      price: '₹179',
      rating: 4.7,
      reviews: 87,
      tag: 'New',
    },
  ];

  const features = [
    {
      icon: '🌱',
      title: 'Natural Ingredients',
      description: 'No artificial preservatives or colors',
    },
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Fresh products delivered to your door',
    },
    {
      icon: '⭐',
      title: 'Premium Quality',
      description: 'Handcrafted with love and care',
    },
    {
      icon: '💯',
      title: 'Satisfaction Guaranteed',
      description: '30-day money-back guarantee',
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < Math.floor(rating) ? 'filled' : i < rating ? 'half' : ''}`}>
        ★
      </span>
    ));
  };

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
          <div className="hero-badge">🌿 Fresh &amp; Natural<br></br></div>

          <h1 className="hero-title">
            Welcome to
            <span className="hero-brand"> FoodHub</span>
          </h1>

          <p className="hero-subtitle">
            Your favorite food products, delivered fresh to your doorstep!
          </p>

          <div className="hero-trust">
            <span>⭐ 4.8 Rating</span>
            <span className="trust-divider">|</span>
            <span>10,000+ Happy Customers</span>
            <span className="trust-divider">|</span>
            <span>Free Delivery on ₹499+</span>
          </div>

          <div className="hero-buttons">
            <Link to="/products">
              <button className="btn-primary">
                Shop Now
                <span className="btn-arrow">→</span>
              </button>
            </Link>

            <Link to="/products">
              <button className="btn-secondary">
                Explore Products
              </button>
            </Link>
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
          <span className="section-label">Our Menu</span>
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
              {/* Product Tag */}
              <div className="product-tag">{product.tag}</div>

              {/* Product Image */}
              <div className="product-image-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                  onError={(e) => {
                    // Fallback: show a colored placeholder if image not found
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="product-image-fallback" style={{ display: 'none' }}>
                  🍓
                </div>
              </div>

              {/* Product Info */}
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>

                {/* Rating */}
                <div className="product-rating">
                  <div className="stars">{renderStars(product.rating)}</div>
                  <span className="rating-score">{product.rating}</span>
                  <span className="rating-count">({product.reviews})</span>
                </div>

                {/* Price + CTA */}
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <button className="product-btn">Add to Cart</button>
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="view-all-wrapper">
          <Link to="/products">
            <button className="view-all-btn">View All Products →</button>
          </Link>
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
          <Link to="/products">
            <button className="cta-button">
              Start Shopping
              <span className="cta-arrow">→</span>
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;