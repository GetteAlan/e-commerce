import React from 'react';
import "./index.scss";

import Title from '../../components/Title';
import Product from '../../components/Product';
import bestSellers from '../../assets/data/best-sellers.json';

export default function BestSellers({reference}) {
  return (
    <section className="best-sellers" ref={reference}>
      <Title text="Best Sellers" />
      <section className="best-sellers-list">
        { bestSellers.map((offer) => (
          <Product 
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
