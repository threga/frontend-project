import { useParams } from "react-router-dom";
import { useState } from "react";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const [showSuccess, setShowSuccess] = useState(false);
  
  const products = [
    {
      _id: "1",
      name: "Laptop",
      price: 55000,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300",
      description: "High performance laptop for work and gaming."
    },
    {
      _id: "2",
      name: "Mobile",
      price: 25000,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300",
      description: "Latest smartphone with amazing camera and features."
    },
    {
      _id: "3",
      name: "Headphones",
      price: 3000,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
      description: "Noise-cancelling headphones for immersive sound."
    }
  ];

  const product = products.find((p) => p._id === id);

  if (!product) return (
    <div className="product-details-container">
      <div className="product-not-found">
        <h2>Product not found!</h2>
      </div>
    </div>
  );

  const handleAddToCart = () => {
    try {
      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingItem = existingCart.find((item) => item._id === product._id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        existingCart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(existingCart));
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
    // Navigate to cart or checkout page
    console.log('Redirecting to checkout...');
  };

  return (
    <div className="product-details-container">
      {showSuccess && (
        <div className="success-message">
          ✅ {product.name} added to cart successfully!
        </div>
      )}
      
      <div className="product-details-content">
        <div className="product-image-section">
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-details-image"
          />
        </div>
        
        <div className="product-info-section">
          <h1 className="product-details-title">{product.name}</h1>
          <p className="product-details-description">{product.description}</p>
          <h2 className="product-details-price">₹{product.price.toLocaleString()}</h2>
          
          <div className="product-actions">
            <button 
              onClick={handleAddToCart}
              className="add-to-cart-btn"
            >
              Add to Cart
            </button>
            <button 
              onClick={handleBuyNow}
              className="buy-now-btn"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;