import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={product.link} target="_blank" rel="noreferrer">
        <img src={product.img} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
