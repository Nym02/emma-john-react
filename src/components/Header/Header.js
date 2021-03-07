/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../../images/logo.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />

      <nav>
        <a href="/">Shop</a>
        <a href="/review">Order Review</a>
        <a href="/inventory">Manage Inventory</a>
      </nav>
    </div>
  );
};

export default Header;
