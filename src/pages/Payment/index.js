import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.scss";

import Title from '../../components/Title';
import RadioButton from '../../components/RadioButton';
import Loading from '../../components/Loading';
import PurchaseSummary from '../../components/PurchaseSummary';
import Shop from '../../assets/shop.svg';
import House from '../../assets/house.svg';
import Card from '../../assets/card.svg';
import { useAuth } from "../../providers/authProvider";
import { useCart } from "../../providers/cartProvider";

import { getProductsById } from '../../services/products';
import { getCards } from '../../services/cards';
import { confirmPurchase } from '../../services/purchases';

export default function Payment({reference}) {
  const navigate = useNavigate();
  const { token, account } = useAuth();
  const { cart, setCart, fetchCurrentCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [cards, setCards] = useState([]);
  const [isLoadingConfirming, setIsLoadingConfirming] = useState(false);

  useEffect(() => {
    if (account && token) {
      const idProducts = cart?.map(product => product.idProduct);
      
      if (idProducts?.length > 0) {
        setIsLoading(true);

        // fetching the products
        (async () => {
          const response = await getProductsById(idProducts);
          const cardsResponse = await getCards(account.id);

          setCards(cardsResponse);
          setCartProducts(response.products);
          setIsLoading(false);
        })();
      }

    } else {
      navigate('/login');
    }
  }, [cart, account, token]);

  const handleConfirmPurchase = async () => {
    setIsLoading(true);
    setIsLoadingConfirming(true);

    const response = await confirmPurchase(account.id);
    const currentCart = await fetchCurrentCart(account.id);

    setCart(currentCart);
    setIsLoading(false);
    setIsLoadingConfirming(false);

    if (response) {
      navigate('/');
    }
  };

  return (
    <section className="payment" ref={reference}>
      <Title text="Payment"/>
      <section className="payment-container">
        { isLoading && (
          <div className="loading-wrapper">
            <Loading />
          </div>
        )}
        { isLoadingConfirming && (<p className="paragraph">Confirming your purchase...</p>)}
        { !isLoading && cartProducts?.length > 0 && (
          <>
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
            <section className="summary-content">
              <PurchaseSummary textButton="Confirm purchase" products={cartProducts} handleClick={handleConfirmPurchase} />
            </section>
          </>
        )}
      </section>
    </section>
  );
}
