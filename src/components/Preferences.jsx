import React from 'react';
import './Preferences.css';

export default function Preferences() {
  return (
    <div className="preferences-container colorful-bg">
      <h2 className="preferences-title animate-pulse rainbow-text">🧠 Your Preferences</h2>
      <p className="preferences-text fade-in">
        We’ll show products based on your likes and previous searches very soon. Stay tuned! 🚀
      </p>

      {/* Favorite Categories */}
      <div className="preferences-section fade-in">
        <h3 className="preferences-subtitle">🌱 Favorite Eco Categories</h3>
        <ul className="preferences-list grid-list">
          <li>♻️ Reusable Items</li>
          <li>🌿 Compostable Products</li>
          <li>☀️ Solar-powered Devices</li>
          <li>🎨 Upcycled Decor</li>
          <li>🧵 Natural Fabrics</li>
        </ul>
      </div>

      {/* Favorite Brands - Updated */}
      <div className="preferences-section fade-in">
        <h3 className="preferences-subtitle">🏷️ Favorite Brands</h3>
        <div className="brand-badges">
          {['EcoWare', 'GreenHome', 'Earthly Goods', 'BambooBuddy', 'Leaf & Co.'].map((brand) => (
            <span key={brand} className="brand-badge">
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* Interests */}
      <div className="preferences-section fade-in">
        <h3 className="preferences-subtitle">🔧 Interests</h3>
        <div className="toggle-group">
          <label className="toggle colorful-toggle">
            <input type="checkbox" defaultChecked />
            <span className="slider"></span>
            Kitchen Essentials 🍽️
          </label>
          <label className="toggle colorful-toggle">
            <input type="checkbox" />
            <span className="slider"></span>
            Travel-Friendly Products 🧳
          </label>
          <label className="toggle colorful-toggle">
            <input type="checkbox" />
            <span className="slider"></span>
            Zero-Waste Living 🌎
          </label>
          <label className="toggle colorful-toggle">
            <input type="checkbox" />
            <span className="slider"></span>
            Eco Fashion 👗
          </label>
        </div>
      </div>

      {/* Smart Suggestions */}
      <div className="preferences-section smart-suggestions fade-in-up">
        <h3 className="preferences-subtitle">💡 Smart Suggestions</h3>
        <p className="highlight-text">Based on your interests, you might love:</p>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://ecofreek.com/wp-content/uploads/2020/05/Eco-friendly-Phone-Cases-500x498.jpg" alt="Eco Phone Case" />
            <p>Biodegradable Phone Cases</p>
          </div>
          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPWfCdcNiHjO3XSnYbXm0CjfvcAjs4YsWrEA&s" alt="Beeswax Wrap" />
            <p>Reusable Beeswax Wraps</p>
          </div>
          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW8nNwX57NAmVU8h00CnFxk_8-ZpzXcaw-rQ&s" alt="Laundry Pods" />
            <p>Plant-Based Laundry Pods</p>
          </div>
        </div>
      </div>
    </div>
  );
}
