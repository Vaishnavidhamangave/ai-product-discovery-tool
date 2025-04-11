import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page vibrant-background">
      <main className="home-container">
        {/* Hero Section */}
        <section className="hero animated fade-in full-screen-section">
          <div className="section-content">
            <h1>
              Discover <span className="highlight bounce">Winning Products</span> with <span className="highlight glow-text">AI 🔍</span>
            </h1>
            <p>
              Our intelligent engine analyzes real-time trends, customer demand, and competition to help you find the most profitable products.
            </p>
            <Link to="/chat" className="cta-button pulse rainbow-button">🚀 Try It Free</Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="features fade-in-up full-screen-section">
          <div className="section-content">
            <h2>🌟 Why Choose Us?</h2>
            <div className="features-grid">
              <div className="feature-card colorful-card hover-rise">
                <img src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png" alt="AI" />
                <h3>AI-Powered Insights</h3>
                <p>Leverage machine learning to spot trending products before they go viral.</p>
              </div>
              <div className="feature-card colorful-card hover-rise">
                <img src="https://cdn-icons-png.flaticon.com/512/2421/2421271.png" alt="Market" />
                <h3>Live Market Analysis</h3>
                <p>Track demand and competition across platforms like Amazon, Etsy, and Shopify.</p>
              </div>
              <div className="feature-card colorful-card hover-rise">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Easy" />
                <h3>Beginner Friendly</h3>
                <p>Just type a niche and let AI do the rest — fast, easy, no tech skills.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="how-it-works fade-in full-screen-section">
          <div className="section-content">
            <h2>🧠 How It Works</h2>
            <div className="steps">
              <div className="step-card hover-glow">
                <h4>1️⃣ Input a Niche</h4>
                <p>Tell us what you want to sell — fashion, gadgets, home, anything!</p>
              </div>
              <div className="step-card hover-glow">
                <h4>2️⃣ Analyze with AI</h4>
                <p>We scan trends, search data, reviews, and market gaps in seconds.</p>
              </div>
              <div className="step-card hover-glow">
                <h4>3️⃣ Discover & Launch</h4>
                <p>Instant product picks with suggestions to launch fast!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials fade-in full-screen-section">
          <div className="section-content">
            <h2>💬 What Our Users Say</h2>
            <div className="testimonial-grid">
              <div className="testimonial-card flicker">
                <p>“I found a trending product in 5 minutes. It’s literally like magic!”</p>
                <span>- Sarah K., Shopify Seller</span>
              </div>
              <div className="testimonial-card flicker">
                <p>“This tool gave me 3 winning products. My revenue doubled last month!”</p>
                <span>- Ahmed M., Amazon FBA Seller</span>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="cta-section fade-in-up">
          <h2 className="shine">Ready to Find Your Next Best-Seller? 🎯</h2>
          <button className="cta-button glow-button">✨ Get Started Now</button>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} AI Product Finder • All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
