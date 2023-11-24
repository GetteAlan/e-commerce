import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.scss";

import Title from '../../components/Title';
import Product from '../../components/Product';
import SearchFilters from '../../components/SearchFilters';
import Loading from '../../components/Loading';
import EmptyBox from '../../assets/empty-box.svg';
import productsData from '../../assets/data/products.json';

const filters = [
  {content: "Product", value: "123"},
  {content: "Shipping", value: "123"}
];

export default function Search({reference}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('tools');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const category = searchParams.get("category");

    fetch('https://e-commerce.gettealan.com/api/v1/categories')
    .then((response) => {
      response.json().then((result) => {
        setCategories(result);
        setIsLoading(false);
      });
      
    }).catch((error) => {
      console.log('Error', error);
    });
    
    if (category) {
      setCategory(category);
    }    
  }, []);

  const search = async () => {
    setProducts(null);
    setIsSearchLoading(true);
    const response = await fetch('https://e-commerce.gettealan.com/api/v1/products');
    const products = await response.json();

    const productTransformed = products.map((product) => {
      return {
        ...product,
        price: `USD ${product.price}`,
      }
    });
    setProducts(productTransformed);
    setIsSearchLoading(false);
  }

  return (
    <>
      { isLoading ? (<Loading />) : (
        <>
          <section className="search" ref={reference}>
          <Title text="Search" />
          <section className="search-container">
            <section className="search-list">
              { isSearchLoading && (<Loading />)}
              { products?.length === 0 && (
                <div className="empty-container">
                  <img className="shop" src={EmptyBox}></img>
                  <h2 className="text">No results was found...</h2>
                </div>
              )}
              { products?.map((product) => (
                <Product
                  id={product.id}
                  title={product.name} 
                  description={product.description} 
                  price={product.price}
                  to={product.to}
                ></Product>
              ))}
            </section>
            <section className="filters-container">
              <SearchFilters filters={filters} categories={categories} handleClick={search}/>
            </section>
          </section>
          </section>
        </>
      )} 
    </>
  );
}
