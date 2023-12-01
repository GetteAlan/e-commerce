import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.scss";

import Title from '../../components/Title';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import ProductPreview from '../../components/ProductPreview';
import PurchaseSummary from '../../components/PurchaseSummary';
import CartEmpty from '../../assets/cart-empty.svg';
import { useAuth } from "../../providers/authProvider";
import { useCart } from "../../providers/cartProvider";

import { getProductsById } from '../../services/products';

export default function Payment({reference}) {
  const { token, account } = useAuth();
  const { cart, fetchCurrentCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    if (account && token) { 
      setIsLoading(true);
      const idProducts = cart?.map(product => product.idProduct);
    
      // fetching the products
      (async() => {
        const response = await getProductsById(idProducts);
  
        setCartProducts(response.products);
        setIsLoading(false);
      })();
    }
  }, [cart, account, token]);

  const getQuantity = (product) => {
    const cartFiltered = cart.filter(item => item.idProduct === product.id)[0];

    return cartFiltered.quantity;
  }

  return (
    <section className="payment" ref={reference}>
      <Title text="Payment"/>
      <section className="payment-container">
        <section className="steps-wrapper">
          <section className="step">
            <h2 className="subtitle">Choose the delivery method for your products</h2>
            <div className="step-option">Domicilio</div>
            <div className="step-option">Retirar</div>
          </section>

          <section className="step">
            <h2 className="subtitle">Choose your payment method</h2>
            <div className="step-option">Domicilio</div>
            <div className="step-option">Retirar</div>
          </section>
        
        </section>
        


        { isLoading && (
          <div className="loading-wrapper">
            <Loading />
          </div>
        )}
        

        { !isLoading && cartProducts.length > 0 && (
          <section className="summary-content">
            <PurchaseSummary products={cartProducts} />
          </section>
        )}
      </section>
    </section>
  );
}
