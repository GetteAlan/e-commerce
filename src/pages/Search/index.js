import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import "./index.scss";

import Title from '../../components/Title';
import Product from '../../components/Product';
import Shop from '../../assets/shop.svg';
import products from '../../assets/data/products.json';

export default function Search({reference}) {
  //let products = [];

  useEffect(()=> {

  }, [])

  return (
    <section className="search" ref={reference}>
      <Title text="Search" />
      <section className="search-list">
        { products.length === 0 && (
          <div className="empty-container">
            <img className="shop" src={Shop}></img>
            <h2 className="text">No results was found...</h2>
          </div>
        )}
        { products.map((product) => (
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
