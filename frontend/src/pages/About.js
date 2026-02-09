import React, { useEffect, useState } from 'react';
import './about.css';

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    { name: 'Artisan Jams', icon: '🍓' },
    { name: 'Classic Ketchup', icon: '🍅' },
    { name: 'Schezwan Chutney', icon: '🌶️' },
    { name: 'Pickles & Relishes', icon: '🥒' },
    { name: 'Specialty Sauces', icon: '🥫' },
    { name: 'Premium Preserves', icon: '🫙' }
  ];

  const values = [
    {
      title: 'Farm Fresh',
      description: 'We source ingredients from local farms, ensuring peak freshness and supporting our community.'
    },
    {
      title: 'No Compromises',
      description: 'Zero artificial preservatives, colors, or flavors. Just honest, wholesome ingredients.'
    },
    {
      title: 'Heritage Recipes',
      description: 'Time-tested recipes passed down through generations, perfected with love and care.'
    },
    {
      title: 'Sustainable',
      description: 'Eco-friendly packaging and ethical sourcing practices for a better tomorrow.'
    }
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div 
          className="hero-content"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="hero-badge">EST. 2026</div>
          <h1 className="hero-title">
            Crafted with
            <span className="hero-title-accent"> Passion</span>
            <br />
            Served with
            <span className="hero-title-accent"> Love</span>
          </h1>
          <p className="hero-subtitle">
            Where tradition meets taste in every jar
          </p>
        </div>
        <div className="hero-decoration"></div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="story-content">
          <div className="story-label">Our Story</div>
          <h2 className="story-title">From Kitchen to Community</h2>
          <div className="story-text">
            <p>
              What began as a family tradition in a small kitchen has blossomed into 
              a beloved brand that graces tables across the region. Our journey started 
              with a simple belief: that food made with quality ingredients and genuine 
              care tastes better.
            </p>
            <p>
              Every product we create carries the essence of homemade goodness—the kind 
              that brings families together and turns ordinary meals into extraordinary 
              memories. We've scaled our operations, but never our commitment to quality.
            </p>
            <p>
              Today, we're proud to offer a range of premium condiments, preserves, and 
              sauces that honor traditional recipes while delighting modern palates. Each 
              jar represents our promise: to bring authentic flavor and wholesome 
              ingredients to your table.
            </p>
          </div>
        </div>
        <div className="story-image-container">
          <div className="story-image"></div>
          <div className="story-decoration-blob"></div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-section">
        <h2 className="products-title">What We Make</h2>
        <div className="products-grid">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="product-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="product-icon">{product.icon}</div>
              <h3 className="product-name">{product.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-header">
          <h2 className="values-title">What Drives Us</h2>
          <p className="values-subtitle">
            Our core values shape every decision, from sourcing to serving
          </p>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="value-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="value-number">0{index + 1}</div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Taste the Difference</h2>
          <p className="cta-text">
            Join thousands of families who've made our products a staple in their homes.
            Experience the perfect blend of tradition and flavor.
          </p>
          <a href="/products"><button className="cta-button">
            Explore Our Products
            <span className="cta-arrow">→</span>
          </button></a>
        </div>
      </section>
    </div>
  );
};

export default About;