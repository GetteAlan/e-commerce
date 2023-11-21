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
        { bestSellers.map((product) => (
          <Product
            id={product.id}
            title={product.title} 
            description={product.description} 
            price={product.price}
            to={product.to}
          ></Product>
        ))}
      </section>
    </section>
  );
}