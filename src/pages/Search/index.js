import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.scss";

import Title from '../../components/Title';
import Product from '../../components/Product';
import SearchFilters from '../../components/SearchFilters';
import Shop from '../../assets/shop.svg';
import productsData from '../../assets/data/products.json';

const filters = [
  {content: "Product", value: "123"},
  {content: "Shipping", value: "123"}
];

export default function Search({reference}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('tools');

  useEffect(() => {
    const category = searchParams.get("category");
    let categories = [];

    fetch('https://e-commerce.gettealan.com/api/v1/categories')
    .then((response) => {
      categories = response;
    }).catch((error) => {
      console.log('Error', error);
    });
    
    if (category) {
      setCategory(category);
    }    
  }, []);

  const search = async () => {
    // const result = productsData.filter((product) => product.category === category);
    let products = [];

    const response = await fetch('https://e-commerce.gettealan.com/api/v1/products');
    console.log('response:', response.json());

    //console.log('category:', category);
    //console.log('result', result);
    setProducts(products);
  }

  return (
    <section className="search" ref={reference}>
      <Title text="Search" />
      <section className="search-container">
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
        <section className="filters-container">
          <SearchFilters title="Filters" filters={filters} total="123123" handleClick={search}/>
        </section>
      </section>
    </section>
  );
}
