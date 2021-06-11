import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
      <Link className="navbar-brand" to="/">
        Pupster
      </Link>
      <div className="nav-content">
        <ul className="navbar-nav nav-items">
          <li className="nav-item">
            <Link to="/" className="nav-item">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/store" className="nav-item">Store</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-item">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-item">Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
