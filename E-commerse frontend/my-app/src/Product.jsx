import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch products from backend
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products");
      
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      setProducts(data);
      setError(null);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError(null);
      // Fallback demo products
      setProducts([
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
          description: "Latest smartphone with amazing camera."
        },
        {
          _id: "3",
          name: "Headphones",
          price: 3000,
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
          description: "Noise-cancelling headphones."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product) => {
    try {
      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingItem = existingCart.find((item) => item._id === product._id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        existingCart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(existingCart));
      alert(`✅ ${product.name} added to cart!`);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const handleBuyNow = (product) => {
    handleAddToCart(product);
    navigate("/cart");
  };

  const handleViewDetails = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/300x200?text=Image+Not+Found";
  };

  if (loading) {
    return (
      <div className="products-container">
        <div className="loading-state">⏳ Loading products...</div>
      </div>
    );
  }

  return (
    <div className="products-container">
      <h1 className="products-title">🛍️ Our Products</h1>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              onError={handleImageError}
              className="product-image"
            />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">₹{product.price.toLocaleString()}</p>
              <p className="product-description">{product.description}</p>
              
              <div className="product-actions">
                <button 
                  className="btn-view-details"
                  onClick={() => handleViewDetails(product._id)}
                >
                  👁️ View Details
                </button>
                
                <button 
                  className="btn-add-cart"
                  onClick={() => handleAddToCart(product)}
                >
                  🛒 Add to Cart
                </button>
                
                <button 
                  className="btn-buy-now"
                  onClick={() => handleBuyNow(product)}
                >
                  ⚡ Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
