import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.scss";

import Title from '../../components/Title';
import Button from '../../components/Button';
import RadioButton from '../../components/RadioButton';
import Loading from '../../components/Loading';
import PurchaseSummary from '../../components/PurchaseSummary';
import CartEmpty from '../../assets/cart-empty.svg';
import Shop from '../../assets/shop.svg';
import House from '../../assets/house.svg';
import Card from '../../assets/card.svg';
import { useAuth } from "../../providers/authProvider";
import { useCart } from "../../providers/cartProvider";

import { getProductsById } from '../../services/products';
import { getCards } from '../../services/cards';
import { confirmPurchase } from '../../services/purchases';

export default function Payment({reference}) {
  const { token, account } = useAuth();
  const { cart, fetchCurrentCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (account && token) { 
      setIsLoading(true);
      const idProducts = cart?.map(product => product.idProduct);
    
      // fetching the products
      (async() => {
        const response = await getProductsById(idProducts);
        const cardsResponse = await getCards(account.id);

        setCards(cardsResponse);
        setCartProducts(response.products);
        setIsLoading(false);
      })();
    }
  }, [cart, account, token]);

  const getQuantity = (product) => {
    const cartFiltered = cart.filter(item => item.idProduct === product.id)[0];

    return cartFiltered.quantity;
  }

  const handleConfirmPurchase = async () => {
    setIsLoading(true);
    const response = await confirmPurchase(account.id);
    console.log('response', response);

    setIsLoading(false);
  };

  return (
    <section className="payment" ref={reference}>
      <Title text="Payment"/>
      <section className="payment-container">
        <section className="steps-wrapper">
          <section className="step">
            <RadioButton id="radio-button-delivery" title="Choose the delivery method for your purchase">
              {[
                {id: 'house', label: 'Home delivery', icon: House, value: '', name: 'delivery-method' },
                {id: 'shop', label: 'On-site pickup', icon: Shop, value: '', name: 'delivery-method' },
              ]}
            </RadioButton>
          </section>

          <section className="step">
            <RadioButton id="radio-button-payment-method" title="Choose your payment method">
              { cards.map((card) => 
                ({ 
                  id: card.id, 
                  label: `${card.brand} ${card.type} ends in ${card.number}`, 
                  icon: Card, 
                  value: card.id, 
                  name: 'payment-method', 
                })
              )}
            </RadioButton>
          </section>        
        </section>     

        { isLoading && (
          <div className="loading-wrapper">
            <Loading />
          </div>
        )}        

        { !isLoading && cartProducts.length > 0 && (
          <section className="summary-content">
            <PurchaseSummary products={cartProducts} handleClick={handleConfirmPurchase} />
          </section>
        )}
      </section>
    </section>
  );
}
