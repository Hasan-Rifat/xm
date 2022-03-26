import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const [carts, setCart] = useState([]);

  const addTOCard = (product) => {
    const exists = carts.find((pb) => pb.id === product.id);

    if (!exists) {
      const allProducts = [...carts, product];
      setCart(allProducts);
    } else return;
  };

  const removeBtn = () => {
    let newCart = [];
    setCart(newCart);
  }

  return (
    <div className="container">
      <div className="shop">
        <div className="products">
          {products.map((product) => (
            <Product
              product={product}
              key={product.id}
              addTOCard={addTOCard}
            ></Product>
          ))}
        </div>
        <div className="carts">
          <Cards carts={carts} removeBtn={removeBtn}></Cards>
        </div>
      </div>
    </div>
  );
};

export default Shop;
