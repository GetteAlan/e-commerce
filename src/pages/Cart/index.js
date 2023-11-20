import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import "./index.scss";

import Title from '../../components/Title';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import ProductPreview from '../../components/ProductPreview';
import PurchaseSummary from '../../components/PurchaseSummary';

export default function Cart({reference}) {
  const [isLoading, setIsLoading] = useState(true);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const cartProducts = JSON.parse(localStorage.getItem('products-cart'));
    setCartProducts(cartProducts);
    setIsLoading(false);
  }, []);

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
              <span>No hay productos.</span>
            )}
            { cartProducts.map((product) => (
              <ProductPreview id={product.id} title={product.title} description={product.description} price={product.price} count={product.count}></ProductPreview>
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