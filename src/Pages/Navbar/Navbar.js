import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
      <Link className="navbar-item" to="/">
        Home
      </Link>
      <Link className="navbar-item" to="/about">
        About
      </Link>
      <Link className="navbar-item" to="/blog">
        Blog
      </Link>
      <Link className="navbar-item" to="/contact">
        Contact Us
      </Link>
    </div>
  );
}
