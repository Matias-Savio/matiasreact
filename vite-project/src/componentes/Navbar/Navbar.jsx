import { Link } from "react-router-dom";

import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <Link to="/">
          <h1 className="navbar-logo">Logo</h1>
        </Link>
        <Link to="/products">
          <h2 className="navbar-products">Productos</h2>
        </Link>
        <Link to="/computadoras">
          <h3 className="navbar-products">Computadoras</h3>
        </Link>
        <Link to="/cart">
          <h4 className="navbar-cart">🛒</h4>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
