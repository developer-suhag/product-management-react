import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const UpdateProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleNameChange = (e) => {
    const updatedName = e.target.value;
    const updatedProduct = { ...product };
    updatedProduct.productName = updatedName;
    setProduct(updatedProduct);
  };
  const handlePriceChange = (e) => {
    const updatedPrice = e.target.value;
    const updatedProduct = { ...product };
    updatedProduct.productPrice = updatedPrice;
    setProduct(updatedProduct);
  };
  const handleQuantityChange = (e) => {
    const updatedQuantity = e.target.value;
    const updatedProduct = { ...product };
    updatedProduct.productQuantity = updatedQuantity;
    setProduct(updatedProduct);
  };

  const handleUpdate = (e) => {
    const url = `http://localhost:5000/products/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("update success");
          setProduct({});
        }
      });

    e.preventDefault();
  };

  return (
    <div>
      <h3>update product with id: {id}</h3>
      <h4>Product name: {product.productName}</h4>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="product name"
          value={product.productName || ""}
          onChange={handleNameChange}
        />
        <input
          type="number"
          placeholder="product price"
          value={product.productPrice || ""}
          onChange={handlePriceChange}
        />
        <input
          type="number"
          placeholder="product quantity"
          value={product.productQuantity || ""}
          onChange={handleQuantityChange}
        />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default UpdateProduct;
