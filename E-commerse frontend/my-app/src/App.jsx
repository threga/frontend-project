import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import Cart from "./Card";
import Contact from "./Contact";
import Login from "./Login";

/* ===============================
   Application Routes
================================ */
const App = () => {
  return (
    <Router>
      <Navbar />

      <main className="app-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
