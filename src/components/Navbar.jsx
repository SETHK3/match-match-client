import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/matches" className="nav-link">
          Matches
        </Link>
        <Link to="/tables" className="nav-link">
          League Tables
        </Link>
        <Link to="/news" className="nav-link">
          News
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
