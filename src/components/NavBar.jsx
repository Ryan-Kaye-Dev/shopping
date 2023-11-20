import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import cartIcon from "../assets/cart.png";

const NavBar = ({ cartItemCount, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value); // Pass the search term to the parent component
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <div className="cart">
          <Link to="/cart">
            <img src={cartIcon} alt="Shopping Cart" className="cart-icon" />
            {cartItemCount > 0 && (
              <span className="cart-item-count">{cartItemCount}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
