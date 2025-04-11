import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import ChatAssistant from "./components/ChatAssistant";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Preferences from "./components/Preferences";
import ProductList from "./components/ProductList";
import SignUp from "./components/SignUp";
import Analytics from "./pages/Analytics";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatAssistant />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </Router>
  );
}

export default App;
