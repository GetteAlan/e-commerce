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
  shippingCost,
  productImage,
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
    <div className="product">
      <Card to={to}>
        <div class="product-image-container">
          <img class="product-image" src={`images/products/${id}-thumbnail.webp`} alt={title}></img>
        </div>
        <div class="card-title">
          <h3 className="product-title">{title}</h3>
        </div>
        <div className="card-description">
          <span class="product-description">{description}</span>
        </div>       
        <hr class="card-divider" />
        <div class="card-footer">
          <div className="footer-description">
            <span class="card-price">{price}</span>
            <span class="shipping">{shippingCost}</span>
          </div>
          
          <div className="button-container">
            <Button text="Buy" handleClick={handleClick}></Button>
          </div>
        </div>
      </Card>
    </div>  
  );
}
