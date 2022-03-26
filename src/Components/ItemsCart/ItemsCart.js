import React from "react";
import "../Cards/Cards.css";

const ItemsCart = ({ cart }) => {
  const { name, image } = cart;
  return (
    <div>
      <div className="Carts-box">
        <div className="cart-box-info">
          <img className="cart-img" src={image} alt="" />
          <span className="cart-name">{name}</span>
        </div>
      </div>
    </div>
  );
};

export default ItemsCart;
