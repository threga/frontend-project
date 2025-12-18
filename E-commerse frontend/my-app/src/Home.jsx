import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { testBackend } from "./services/testApi";
import "./Home.css";

function Home() {
  const [backendMessage, setBackendMessage] = useState("");
  const [backendError, setBackendError] = useState(false);
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/products');
  };

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/400x200?text=Electronics+Store';
  };

  useEffect(() => {
    // Try to connect to backend, but don't break the app if it fails
    testBackend()
      .then((data) => {
        setBackendMessage(data.message);
        setBackendError(false);
      })
      .catch((err) => {
        console.log("Backend not available, running in frontend-only mode");
        setBackendError(true);
        setBackendMessage("Running in demo mode - Backend not connected");
      });
  }, []);

  return (
    <div className="home-container">
      {/* Status Message */}
      {backendMessage && (
        <div className={`status-badge ${backendError ? 'demo' : 'live'}`}>
          {backendError ? '🔧 Demo Mode' : '✅ Live'}
        </div>
      )}

      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <div className="hero-badge">✨ New Collection 2025</div>
          <h1 className="hero-title">
            Welcome to
            <span className="gradient-text"> MegaBasket</span>
          </h1>
          <p className="hero-subtitle">
            Shop the latest trends with exclusive deals and fast delivery
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={handleShopNow}>
              🛍️ Shop Collection
            </button>
            <button className="btn-secondary">
              📱 Download App
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100" alt="Phone" onError={handleImageError} />
            <span>Phones</span>
          </div>
          <div className="floating-card card-2">
            <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=100" alt="Laptop" onError={handleImageError} />
            <span>Laptops</span>
          </div>
          <div className="floating-card card-3">
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100" alt="Headphones" onError={handleImageError} />
            <span>Audio</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-item">
          <div className="stat-number">50K+</div>
          <div className="stat-label">Happy Customers</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">1000+</div>
          <div className="stat-label">Products</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">24/7</div>
          <div className="stat-label">Support</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">99%</div>
          <div className="stat-label">Satisfaction</div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <h2 className="section-title">✨ Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <div className="product-image">
              <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200" alt="Smartphone" onError={handleImageError} />
              <div className="product-badge">Hot</div>
            </div>
            <h3>Premium Smartphone</h3>
            <p className="price">₹25,000</p>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200" alt="Laptop" onError={handleImageError} />
              <div className="product-badge sale">Sale</div>
            </div>
            <h3>Gaming Laptop</h3>
            <p className="price">₹55,000</p>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200" alt="Headphones" onError={handleImageError} />
              <div className="product-badge new">New</div>
            </div>
            <h3>Wireless Headphones</h3>
            <p className="price">₹3,000</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>🎉 Get Exclusive Deals</h2>
          <p>Subscribe to our newsletter and get 20% off your first order!</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
