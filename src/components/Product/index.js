import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from '../Button';
import Tag from "../Tag";
import Card from '../Card';
import Toast from "../Toast";
import "./index.scss";
import Cart from '../../assets/cart.svg';

export default function Product({
  id,
  title, 
  description, 
  price,
  shippingCost,
  productImage,
  to }) {
  const [idProduct, setIdProduct] = useState(id);
  const freeTagColor = '#e6f7ee';
  const freeTagBorderColor = '#1c6415';
  const freeTagTextColor = '#00a650';
  const freeShippingTag = <Tag color={freeTagColor} borderColor={freeTagBorderColor} textColor={freeTagTextColor}>Free</Tag>;

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

    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
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
            <span class="card-price">US$ {price}</span>
            <span class="shipping">Shipping {shippingCost > 0.00 ? `US$ ${shippingCost}` : freeShippingTag}</span>
          </div>          
          <div className="button-container">
            <Link className="cart-link" onClick={handleClick}>
              <img className="cart-svg" src={Cart}></img>
            </Link>   
          </div>
        </div>
      </Card>
      <Toast>The product was added to your cart.</Toast>
    </div>  
  );
}
