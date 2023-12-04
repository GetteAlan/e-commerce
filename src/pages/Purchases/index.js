import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.scss";

import Title from '../../components/Title';
import Loading from '../../components/Loading';

import PurchasesSvg from '../../assets/purchases.svg';

import { useAuth } from "../../providers/authProvider";

import { getPurchases } from '../../services/purchases';

export default function Purchases({reference}) {
  const { token, account } = useAuth();
  const [purchases, setPurchases] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (account && token) { 
      setIsLoading(true);

      (async() => {
        const response = await getPurchases(account.id);
        const purchasesResult = [];

        for (const [key, value] of Object.entries(response)) {
          purchasesResult.push({id: key, purchaseData: value});
        }

        setPurchases(purchasesResult);
        setIsLoading(false);
      })();
    }
  }, []);

  const formatDate = (date) => {
    return new Date(date).toLocaleString('en-GB', { 
      timeZone: 'UTC',
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getQuantityContent = (quantity) => {
    return quantity === 1 ? `${quantity} unit` : `${quantity} units`;
  }

  return (
    <section className="purchases" ref={reference}>
      <Title text="Purchases" />
      { purchases && (
        <section className="purchases-list">
          {purchases?.map((purchase) => (
            <div className="purchase-item">
              <p className="purchase-date paragraph strong-weight">{formatDate(purchase.purchaseData.purchaseDate)}</p>
              

              <div className="purchase-products-list">
                { purchase.purchaseData.products?.map((product) => (
                  <div className="product">
                    <img className="product-img" src={`../images/products/${product.idProduct}-thumbnail.webp`} alt={product.idProduct}></img>
                    <div className="product-items">
                      <div className="product-item">
                        <p className="paragraph color-green strong-weight">Delivered</p>
                        <p className="paragraph"></p>
                      </div>
                      <div className="product-item">
                        <p className="paragraph">Product</p>
                        <p className="paragraph"></p>
                      </div>
                      <div className="product-item">
                        <p className="paragraph">Arrived on {product.quantity}</p>
                        <p className="paragraph"></p>
                      </div>
                      <div className="product-item">
                        <p className="paragraph">{getQuantityContent(product.quantity)}</p>
                        <p className="paragraph"></p>
                      </div>
                    </div>
                  </div>
                ))}             
              </div>

              <hr class="purchase-divider" />
              <div className="purchase-total-wrapper">
                <p className="paragraph strong-weight">Shipping</p>
                <p className="paragraph">U$S {purchase.purchaseData.shipping}</p>
              </div>
              <div className="purchase-total-wrapper">
                <p className="paragraph strong-weight">Total</p>
                <p className="paragraph strong-weight color-green">U$S {purchase.purchaseData.total}</p>
              </div>
            </div>
          ))}
        </section>   
      )}

      { isLoading && (
        <div className="loading-wrapper">
          <Loading />
        </div>
      )}
    
      { !isLoading && !purchases && (
        <section className="purchases-empty-state">
          <div className="svg-description">
            <img className="account-svg" src={PurchasesSvg}></img>
          </div>
          <div className="empty-description">
            <span className="paragraph">Here you can see your purchases.</span>
            <span className="paragraph"><Link to='/login'>Sign in</Link> to view your account.</span>
          </div>
        </section>
      )}
    </section>
  );
}
