import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from '../Button';
import Card from '../Card';
import "./index.scss";

export default function Product({
  id,
  title, 
  description, 
  price,
  image,
  to }) {
  const [idProduct, setIdProduct] = useState(id);

  const handleClick = () => {
    let cartProducts = JSON.parse(localStorage.getItem('products-cart'));
    const product = {
      id: idProduct,
      title,
      description,
      price,
      count: 1,
    };

    if (!cartProducts || !Array.isArray(cartProducts)) {
      cartProducts = [];
    }

    cartProducts.push(product);
    localStorage.setItem('products-cart', JSON.stringify(cartProducts));
  };

  return (
    <Card to={to}>
      <div className="product">
        <div class="card-img"><div class="img"></div></div>
        <div class="card-title">{title}</div>
        <div class="card-subtitle">{description}</div>
        <hr class="card-divider" />
        <div class="card-footer">
          <div class="card-price">{price}</div>
          <div className="button-container">
            <Button text="Buy" handleClick={handleClick}></Button>
          </div>
        </div>
      </div>
    </Card>    
  );
}
