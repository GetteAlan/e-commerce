import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import Button from '../../components/Button';
import "./index.scss";

export default function PurchaseSummary({products}) {
  const navigate = useNavigate();
  const totalProducts = products?.reduce((accumulator, product) => accumulator + parseFloat(product.price), 0);
  const shipping = products?.reduce((accumulator, product) => accumulator + parseFloat(product.shipping_cost), 0);
  
  const totalAmount = 0;

  const handleBuyClick = () => {
    navigate('/payment');
  };

  return (
    <section className="summary">
      <div className="header">
        <h2 className="subtitle">Purchase Summary</h2>
      </div>
      <div className="content">
      
        <div className="content-key-value">
          <span className="paragraph">Products</span>
          <span className="paragraph">{`US$ ${totalProducts.toFixed(2)}`}</span>
        </div>

        <div className="content-key-value">
          <span className="paragraph">Shipping</span>
          <span className="paragraph">{`US$ ${shipping.toFixed(2)}`}</span>
        </div>

        <div className="content-key-value margin-top-16">
          <span className="paragraph strong">Total</span>
          <span className="paragraph">{`US$ ${totalAmount}`}</span>
        </div>
      </div>
      <div className="footer">
        <Button text="Buy" handleClick={handleBuyClick}></Button>     
      </div>
    </section>    
  );
}
