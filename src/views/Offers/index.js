import React from 'react';
import "./index.scss";

import Title from '../../components/Title';
import Card from '../../components/Card';
import offers from '../../assets/data/offers.json';

export default function Offers({reference}) {
  return (
    <section className="offers" ref={reference}>
      <Title text="Offers" />
      <section className="offers-list">
        { offers.map((offer) => (
          <Card 
            title={offer.title} 
            description={offer.description} 
            price={offer.price}
          ></Card>
        ))}
      </section>
    </section>
  );
}
