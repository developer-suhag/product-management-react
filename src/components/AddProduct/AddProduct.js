import React, { useRef } from "react";

const AddProduct = () => {
  const nameRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();

  const handleAddProduct = (e) => {
    const productName = nameRef.current.value;
    const productPrice = priceRef.current.value;
    const productQuantity = quantityRef.current.value;

    const newProduct = { productName, productPrice, productQuantity };
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    e.preventDefault();
  };
  return (
    <div>
      <h3>Please add a product</h3>
      <form onSubmit={handleAddProduct}>
        <input type="text" ref={nameRef} placeholder="product name" />
        <input type="text" ref={priceRef} placeholder="product price" />
        <input type="number" ref={quantityRef} placeholder="product quantity" />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddProduct;
