import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from '../Button';
import IncreaseDecreaseInput from "../IncreaseDecreaseInput";
import Card from '../Card';
import "./index.scss";

export default function ProductPreview({
  id,
  name, 
  description, 
  price,
  initialQuantity,
  to }) {
  const [idProduct, setIdProduct] = useState(id);
  const [quantity, setQuantity] = useState(initialQuantity);
  
  const handleClick = () => {
    let cartProducts = JSON.parse(localStorage.getItem('products-cart'));
  
    if (cartProducts && Array.isArray(cartProducts)) {
      cartProducts.push(idProduct);
    } else {
      cartProducts = [idProduct];
    }

    // localStorage.setItem('products-cart', JSON.stringify(cartProducts));
  };

  const handleDecrease = (quantity) => {
    
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }    
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <Card to={to}>
      <div className="product-preview">
        <div className="product-image-container">
          <img class="product-image" src={`images/products/${id}-thumbnail.webp`} alt={name}></img>
        </div>
        <div className="card-description">
          <div className="card-title">{name}</div>
          <div className="card-subtitle">{description}</div>
        </div>
        <div className="card-options">
          <div className="options-container">
            {/* <Button text="Buy" handleClick={handleClick}></Button> */}
            <IncreaseDecreaseInput quantity={quantity} handleDecrease={() => handleDecrease(quantity)} handleIncrease={() => handleIncrease(quantity)}></IncreaseDecreaseInput>
          </div>
        </div>
        <div className="card-summary">
          <div className="card-price">{`US$ ${price}`}</div>
          { quantity > 1 && (
            <div className="card-price">{`x${quantity}`}</div>
          )}
        </div>
      </div>
    </Card>    
  );
}
