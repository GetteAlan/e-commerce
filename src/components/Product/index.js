import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from '../Button';
import Tag from "../Tag";
import Card from '../Card';
import Toast from "../Toast";
import Loading from "../Loading";
import "./index.scss";
import Cart from '../../assets/cart.svg';
import { useAuth } from "../../providers/authProvider";
import { useCart } from "../../providers/cartProvider";

export default function Product({
  id,
  title, 
  description, 
  price,
  shippingCost,
  productImage,
  to,
  idAccount,
}) {
  const { account, token } = useAuth();
  const { fetchCurrentCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [idProduct, setIdProduct] = useState(id);
  const freeTagColor = '#e6f7ee';
  const freeTagBorderColor = '#1c6415';
  const freeTagTextColor = '#00a650';
  const freeShippingTag = <Tag color={freeTagColor} borderColor={freeTagBorderColor} textColor={freeTagTextColor}>Free</Tag>;

  const addCartHandling = () => {
    if (account && token) {
      setIsLoading(true);
      const endpoint = `https://e-commerce.gettealan.com/api/v1/cart/${idAccount}`;
  
      fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          idProduct,
          quantity: 1,
        })
      })
      .then((response) => {
        response.json().then(async(result) => {
          console.log(result);
          await fetchCurrentCart(account.id);
          setIsLoading(false);
          var x = document.getElementById("snackbar");
          x.className = "show";
          setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        });
      }).catch((error) => {
        console.log('Error', error);
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      });
    }
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
            { isLoading ? (
              <div className="loading-wrapper">
                <Loading />
              </div>
            ) : (
              <Link className="cart-link" onClick={addCartHandling}>
                <img className="cart-svg" src={Cart}></img>
              </Link>   
            )}        
          </div>
        </div>
      </Card>
      <Toast>The product was added to your cart.</Toast>
    </div>  
  );
}
