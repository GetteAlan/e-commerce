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
import { useCart } from "../../providers/cartProvider";

export default function Cart({reference}) {
  const { cart, fetchCurrentCart } = useCart();
  const [isLoading, setIsLoading] = useState(true);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const cartProducts = [];
    const idProducts = cart?.map(product => product.idProduct);
    console.log('idProducts', idProducts)
    




    setCartProducts(cartProducts);
    setIsLoading(false);
  }, [cart]);

  const summary = [
    {content: "Product", value: "123"},
    {content: "Shipping", value: "123"}
  ];

  return (
    <section className="cart" ref={reference}>
      <Title text="Cart"/>
      <section className="cart-container">
        <section className="products-content">
          <div className="products-container">
            { isLoading && (
              <div className="loading-container">
                <Loading />
              </div>
            )}
            { cartProducts.length === 0 && (
              <section className="cart-empty-wrapper">
              <div className="svg-description">
                <img className="cart-svg" src={CartEmpty}></img>
              </div>
              <div className="empty-description">
                <span className="paragraph">Here you can see your cart list.</span>
                <span className="paragraph"><Link to='/login'>Sign in</Link> to view your cart.</span>
              </div>
            </section>

            )}
            { cartProducts.map((product) => (
              <ProductPreview id={product.id} title={product.title} price={product.price} count={product.count}></ProductPreview>
            ))}
          </div>
        </section>
        <section className="summary-content">
          <PurchaseSummary 
            title="Purchase Summary"
            summary={summary}
            total="123123"
          />
        </section>
      </section>
    </section>
  );
}