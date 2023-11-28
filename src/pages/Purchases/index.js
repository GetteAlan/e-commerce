import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.scss";

import Title from '../../components/Title';
import PurchasesSvg from '../../assets/purchases.svg';

export default function Purchases({reference}) {
  const [purchases, setPurchases] = useState();

  useEffect(() => {

  }, []);

  return (
    <section className="purchases" ref={reference}>
      <Title text="Purchases" />
      {purchases && (
        <section className="purchases-list">

        </section>
      )}
      <section className="purchases-empty-state">
        <div className="svg-description">
          <img className="account-svg" src={PurchasesSvg}></img>
        </div>
        <div className="empty-description">
          <span className="paragraph">Here you can see your purchases.</span>
          <span className="paragraph"><Link to='/login'>Sign in</Link> to view your account.</span>
        </div>
      </section>
    </section>
  );
}