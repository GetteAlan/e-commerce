import React from "react";
import PropTypes from "prop-types";

import Button from '../../components/Button';
import "./index.scss";

export default function PurchaseSummary({
  title,
  subtitle,
  summary,
  total,
  children,
  to,
}) {

  return (
    <section className="summary">
      <div className="header">
        <h2 className="subtitle">{title}</h2>
      </div>
      <div className="content">
        { summary.map((item) => (
          <div className="content-key-value">
            <span className="paragraph">{item.content}</span>
            <span className="paragraph">{item.value}</span>
          </div>
        ))}
        <div className="content-key-value margin-top-16">
          <span className="paragraph strong">Total</span>
          <span className="paragraph">{total}</span>
        </div>
      </div>
      <div className="footer">
        <Button text="Buy"></Button>     
      </div>
      {children}
    </section>    
  );
}
