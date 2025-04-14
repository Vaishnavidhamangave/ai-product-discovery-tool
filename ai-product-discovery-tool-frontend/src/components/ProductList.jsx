import React, { useState } from 'react';
import './ProductList.css';

const productsData = [
  {
    id: 1,
    name: 'Eco Bamboo Cup',
    price: 'Rs. 199',
    imageUrl: 'https://images.pexels.com/photos/7303870/pexels-photo-7303870.jpeg',
    category: 'Kitchen',
    onSale: false,
  },
  {
    id: 2,
    name: 'Reusable Shopping Bag',
    price: 'Rs. 129',
    imageUrl: 'https://images.pexels.com/photos/4856590/pexels-photo-4856590.jpeg',
    category: 'Accessories',
    onSale: true,
  },
  {
    id: 3,
    name: 'Biodegradable Phone Case',
    price: 'Rs. 249',
    imageUrl: 'https://images.pexels.com/photos/7742552/pexels-photo-7742552.jpeg',
    category: 'Electronics',
    onSale: true,
  },
  {
    id: 4,
    name: 'Compostable Trash Bags (30pcs)',
    price: 'Rs. 179',
    imageUrl: 'https://m.media-amazon.com/images/I/51zQ86JXmJL._SX522_.jpg',
    category: 'Home',
    onSale: false,
  },
  {
    id: 5,
    name: 'Solar-Powered LED Lights',
    price: 'Rs. 299',
    imageUrl: 'https://m.media-amazon.com/images/I/81Okmlg-MuL._SX679_.jpg',
    category: 'Home',
    onSale: false,
  },
  {
    id: 6,
    name: 'Plant-Based Toothbrush Set (4pcs)',
    price: 'Rs. 149',
    imageUrl: 'https://images.pexels.com/photos/4202917/pexels-photo-4202917.jpeg',
    category: 'Personal Care',
    onSale: false,
  },
  {
    id: 7,
    name: 'Organic Cotton Face Towels (3pcs)',
    price: 'Rs. 199',
    imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRTqZLt_BfKujhGiuZaS6yzK6iiIo3K5X6RjCr4HWVIhygJxX7MeVzkJHMih_dHSKLiQtqauiD9L5FZIi88ILE8lTnF67D5v5dapT_9BH4PZY1NJ656w1Ck',
    category: 'Personal Care',
    onSale: false,
  },
  {
    id: 8,
    name: 'Stainless Steel Straw Kit',
    price: 'Rs. 89',
    imageUrl: 'https://images.meesho.com/images/products/248082743/ow3fw_512.webp',
    category: 'Kitchen',
    onSale: true,
  },
  {
    id: 9,
    name: 'Beeswax Food Wraps (Set of 5)',
    price: 'Rs. 189',
    imageUrl: 'https://m.media-amazon.com/images/I/71qLcxtrkbL._SX679_.jpg',
    category: 'Kitchen',
    onSale: false,
  },
  {
    id: 10,
    name: 'Bamboo Charcoal Air Purifying Bags (4-pack)',
    price: 'Rs. 229',
    imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSeOw4qIFr-XCoUMMlFDuWxQ9lq2sYwY265aLB10sHmRdeN0WSmRop-hF2fVxSHUq92ExTHhflytPNPSV2S9gJzip3KZQbQZrj3i3-hzik',
    category: 'Home',
    onSale: true,
  },
];

export default function ProductList() {
  const [sortOption, setSortOption] = useState('default');
  const [filterCategory, setFilterCategory] = useState('all');

  const handleSortChange = (e) => setSortOption(e.target.value);
  const handleCategoryChange = (e) => setFilterCategory(e.target.value);

  let displayedProducts = [...productsData];

  if (filterCategory !== 'all') {
    displayedProducts = displayedProducts.filter(
      (product) => product.category === filterCategory
    );
  }

  if (sortOption === 'lowToHigh') {
    displayedProducts.sort(
      (a, b) =>
        parseInt(a.price.replace('Rs. ', '')) -
        parseInt(b.price.replace('Rs. ', ''))
    );
  } else if (sortOption === 'highToLow') {
    displayedProducts.sort(
      (a, b) =>
        parseInt(b.price.replace('Rs. ', '')) -
        parseInt(a.price.replace('Rs. ', ''))
    );
  }

  return (
    <div className="product-container">
      <h2 className="product-title">🛍️ Recommended Products</h2>

      <div className="filter-container">
        <select onChange={handleSortChange}>
          <option value="default">Sort by</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>

        <select onChange={handleCategoryChange}>
          <option value="all">All Categories</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Home">Home</option>
          <option value="Accessories">Accessories</option>
          <option value="Electronics">Electronics</option>
          <option value="Personal Care">Personal Care</option>
        </select>
      </div>

      <div className="product-grid">
        {displayedProducts.map((product) => (
          <div key={product.id} className="product-card">
            {product.onSale && <span className="sale-badge">Sale</span>}
            <div className="image-wrapper">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="product-image"
              />
            </div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button className="add-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
