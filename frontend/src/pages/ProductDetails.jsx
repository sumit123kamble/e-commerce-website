import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  const products = [
    {
      id: "1",
      name: "Strawberry Jam",
      price: 180,
      description: "Fresh strawberry jam made with real fruit.",
      image: "https://as1.ftcdn.net/v2/jpg/01/09/77/54/1000_F_109775452_cO56We39sZFAUOS8Gp3yg3Uf4oFCsbsL.jpg",
    },
    {
      id: "2",
      name: "Mango Jam",
      price: 160,
      description: "Sweet mango jam with authentic taste.",
      image: "https://as1.ftcdn.net/v2/jpg/01/09/77/54/1000_F_109775468_6276zQpACj4MFKNwWsXkmKCkbGVW7mg4.jpg",
    },
  ];

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "auto" }}>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>₹{product.price}</h3>

      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
