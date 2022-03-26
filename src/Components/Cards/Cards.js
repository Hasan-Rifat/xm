import { useState } from "react";
import ItemsCart from "../ItemsCart/ItemsCart";
import "./Cards.css";

const Cards = ({ carts, removeBtn }) => {
  console.log(carts);

  const [getOne, setGetOne] = useState([]);

  const sigleProduct = (carts) => {
    let luckyOne = carts[Math.floor(Math.random() * carts.length)];
    setGetOne(luckyOne);
  };

  return (
    <div className="item">
      {carts.map((cart) => (
        <ItemsCart cart={cart} key={cart.id}></ItemsCart>
      ))}
      <div className="itemss">
        <button className="cart-btn" onClick={()=> sigleProduct(carts)}>choose 1 for me</button>
        <p>{getOne.name}</p>
        <button className="cart-btn" onClick={removeBtn}>Choose agin</button>
      </div>
    </div>
  );
};

export default Cards;
