import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css"

// Navbar Component
const Navigation = () => {
  return (
    <nav className="nav-box">
      <Link to="/" >Home</Link>
      <Link to="/about" >About</Link>
      <Link to="/contact" >Contact</Link>
      <Link to="/users" >Users</Link>
    </nav>
  );
};

export default Navigation;
