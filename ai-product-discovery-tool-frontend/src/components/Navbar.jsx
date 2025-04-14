import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🛍️ AI Shop</div>

      <div className="nav-center">
        <Link to="/">Home</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/products">Products</Link>
        <Link to="/preferences">Preferences</Link>
      </div>

      <div className="nav-right">
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
