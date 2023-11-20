import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from '../Button';
import IncreaseDecreaseInput from "../IncreaseDecreaseInput";
import Card from '../Card';
import "./index.scss";

export default function ProductPreview({
  id,
  title, 
  description, 
  price,
  image,
  count,
  to }) {
  const [idProduct, setIdProduct] = useState(id);

  const handleClick = () => {
    let cartProducts = JSON.parse(localStorage.getItem('products-cart'));
  
    if (cartProducts && Array.isArray(cartProducts)) {
      cartProducts.push(idProduct);
    } else {
      cartProducts = [idProduct];
    }

    localStorage.setItem('products-cart', JSON.stringify(cartProducts));
  };

  return (
    <Card to={to}>
      <div className="product-preview">
        <div className="card-img"><div className="img"></div></div>
        <div className="card-description">
          <div className="card-title">{title}</div>
          <div className="card-subtitle">{description}</div>
        </div>
        <div className="card-options">
          <div className="button-container">
            {/* <Button text="Buy" handleClick={handleClick}></Button> */}
            <IncreaseDecreaseInput value={count}></IncreaseDecreaseInput>
          </div>
        </div>
        <div className="card-summary">
          <div className="card-price">{price}</div>
        </div>
      </div>
    </Card>    
  );
}
