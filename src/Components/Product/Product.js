import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";

const Product = ({ product, addTOCard }) => {
  const { name, price, image } = product;
  return (
    <div>
      <div className="card">
        <img src={image} alt="" />
        <div className="card-info">
          <h5>{name}</h5>
          <p>${price}</p>
        </div>
        <button className="btn" onClick={()=> addTOCard(product)}>
          <p className="btn-text">ADD TO CART</p>
          <FontAwesomeIcon className="btn-icon" icon={faShoppingCart}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Product;
