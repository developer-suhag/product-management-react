import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProdcuts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProdcuts(data));
  }, []);

  return (
    <div>
      <h3>products found: {products.length}</h3>
      <ul>
        {products.map((p) => (
          <li>
            <strong>{p.productName}</strong>, Price:$ {p.productPrice}::
            Quantity: {p.productQuantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
