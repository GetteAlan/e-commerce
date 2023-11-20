import React from 'react';
import "./index.scss";

import Title from '../../components/Title';
import Product from '../../components/Product';
import offers from '../../assets/data/offers.json';

export default function Offers({reference}) {
  return (
    <section className="offers" ref={reference}>
      <Title text="Offers" />
      <section className="offers-list">
        { offers.map((offer) => (
          <Product
            id={offer.id}
            title={offer.title} 
            description={offer.description} 
            price={offer.price}
            to={offer.to}
          ></Product>
        ))}
      </section>
    </section>
  );
}
