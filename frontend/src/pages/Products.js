import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";
import { useCart } from "../context/CartContext";

const Products = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [showPopup, setShowPopup] = useState(false);

  const products = [
    {
      id: 1,
      name: "Strawberry Jam",
      price: 180,
      image:
        "https://as1.ftcdn.net/v2/jpg/01/09/77/54/1000_F_109775452_cO56We39sZFAUOS8Gp3yg3Uf4oFCsbsL.jpg",
    },
    {
      id: 2,
      name: "Mango Jam",
      price: 160,
      image:
        "https://as1.ftcdn.net/v2/jpg/01/09/77/54/1000_F_109775468_6276zQpACj4MFKNwWsXkmKCkbGVW7mg4.jpg",
    },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);

    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="products-page">
      <h2>Our Products</h2>

      {showPopup && (
        <div className="cart-popup">
          Item added to cart ✅
        </div>
      )}

      <div className="products-grid">
        {products.map((product) => (
          <div
            className="product-card"
            key={product.id}
            onClick={() => navigate(`/products/${product.id}`)}
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>

            <div className="product-actions">
              <button
                className="view-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/products/${product.id}`);
                }}
              >
                View
              </button>

              <button
                className="cart-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
