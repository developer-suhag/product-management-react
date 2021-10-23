import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProdcuts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProdcuts(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure? If you delete you can not revert it!"
    );

    if (proceed) {
      const url = `http://localhost:5000/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("delete success");
            const remaining = products.filter((p) => p._id !== id);
            setProdcuts(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h3>products found: {products.length}</h3>
      <ul>
        {products.map((p) => (
          <li key={p._id}>
            <strong>{p.productName}</strong>, Price:$ {p.productPrice}::
            Quantity: {p.productQuantity}
            <Link to={`/update/${p._id}`}>
              <button>Update</button>
            </Link>
            <button onClick={() => handleDelete(p._id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
