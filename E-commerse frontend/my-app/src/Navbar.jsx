import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

/* ===============================
   Main Navigation Bar
================================ */
const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <NavLink to="/">TechBazaar</NavLink>
      </div>

      <nav className="links">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/products">
          Products
        </NavLink>

        <NavLink to="/cart">
          Cart
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>

        <NavLink to="/login">
          Login
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
