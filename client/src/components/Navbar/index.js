import React from "react";
import { Link as RouterLink} from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
      <RouterLink className="navbar-brand" to="/">
        Pupster
      </RouterLink>
      <div className="nav-content">
        <ul className="navbar-nav nav-items">
          <li className="nav-item">
            <RouterLink to="/" className="nav-item">About</RouterLink>
          </li>
          <li className="nav-item">
            <RouterLink to="/store" className="nav-item">Store</RouterLink>
          </li>
          <li className="nav-item">
            <RouterLink to="/gallery" className="nav-item">Gallery</RouterLink>
          </li>
          <li className="nav-item">
            <RouterLink to="/blog" className="nav-item">Blog</RouterLink>
          </li>
        </ul>
        <br />
        <ScrollLink
            activeClass="active"
            to="aboutScroll"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >About Scroll</ScrollLink>
        ||
        <ScrollLink
            activeClass="active"
            to="storeScroll"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >Store Scroll</ScrollLink>
        ||
        <ScrollLink
            activeClass="active"
            to="galleryScroll"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >Gallery Scroll</ScrollLink>
        ||
        <ScrollLink
            activeClass="active"
            to="blogScroll"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >Blog Scroll</ScrollLink>
        ||
        <ScrollLink
            activeClass="active"
            to="connectScroll"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >Connect Scroll</ScrollLink>
      </div>
    </nav>
  );
}

export default Navbar;
