import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/addProdcuts">Add Products</Link>
      </nav>
    </div>
  );
};

export default Header;
