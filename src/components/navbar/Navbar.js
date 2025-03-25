import React from "react";
import { Link } from "react-router-dom";

// Navbar Component
const Navigation = () => {
  return (
    <nav style={{ padding: "10px", background: "#333" }}>
      <Link to="/" style={{ color: "white", margin: "10px" }}>Home</Link>
      <Link to="/about" style={{ color: "white", margin: "10px" }}>About</Link>
      <Link to="/contact" style={{ color: "white", margin: "10px" }}>Contact</Link>
      <Link to="/users" style={{ color: "white", margin: "10px" }}>Users</Link>
    </nav>
  );
};

export default Navigation;
