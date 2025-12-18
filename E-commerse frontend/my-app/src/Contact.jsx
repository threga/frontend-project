import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <div className="hero-badge">💬 Get In Touch</div>
          <h1 className="hero-title">
            Let's Start a
            <span className="gradient-text"> Conversation</span>
          </h1>
          <p className="hero-subtitle">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
        <div className="floating-elements">
          <div className="floating-icon icon-1">📧</div>
          <div className="floating-icon icon-2">📱</div>
          <div className="floating-icon icon-3">💬</div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="contact-main">
        <div className="contact-grid">
          <div className="form-section">
            <div className="form-header">
              <h2>Send us a Message</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours</p>
            </div>
            
            <form className="modern-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  required 
                />
                <span className="input-icon">👤</span>
              </div>

              <div className="input-group">
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email Address"
                  required 
                />
                <span className="input-icon">📧</span>
              </div>

              <div className="input-group">
                <textarea 
                  rows="5" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  required
                ></textarea>
                <span className="input-icon message-icon">💭</span>
              </div>

              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <span className="btn-icon">🚀</span>
              </button>
            </form>
          </div>

          <div className="info-section">
            <div className="contact-card">
              <div className="card-icon">🏢</div>
              <h3>Visit Our Store</h3>
              <p>123 Shopping Street<br/>Mumbai, India 400001</p>
            </div>

            <div className="contact-card">
              <div className="card-icon">📞</div>
              <h3>Call Us</h3>
              <p>+91 98765 43210<br/>Mon-Sat 9AM-8PM</p>
            </div>

            <div className="contact-card">
              <div className="card-icon">✉️</div>
              <h3>Email Us</h3>
              <p>support@shopease.com<br/>We reply within 24hrs</p>
            </div>

            <div className="contact-card">
              <div className="card-icon">💬</div>
              <h3>Live Chat</h3>
              <p>Available 24/7<br/>Instant support</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2 className="section-title">❓ Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>🚚 What's your delivery time?</h3>
            <p>We deliver within 2-5 business days across India</p>
          </div>
          <div className="faq-item">
            <h3>🔄 What's your return policy?</h3>
            <p>Easy 30-day returns with free pickup</p>
          </div>
          <div className="faq-item">
            <h3>💳 What payment methods do you accept?</h3>
            <p>All major cards, UPI, net banking & COD</p>
          </div>
          <div className="faq-item">
            <h3>🛡️ Is my data secure?</h3>
            <p>Yes, we use bank-level encryption for all transactions</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;