import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.scss";

import Button from '../../components/Button';
import Checkbox from "../../components/Checkbox";
import InputText from "../../components/InputText";
import Title from '../../components/Title';
import Product from '../../components/Product';
import Loading from '../../components/Loading';
import EmptyBox from '../../assets/empty-box.svg';

export default function Search({reference}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('tools');
  const [categories, setCategories] = useState([]);
  const [priceFrom, setPriceFrom] = useState();
  const [priceTo, setPriceTo] = useState();

  const search = async () => {
    setProducts(null);
    setIsSearchLoading(true);

    const categoriesList = categories.filter((category => category.checked && category.id !== 0))
      .map((category => category.id))
      .join('|');
    let categoriesQuery = '';
    
    if (categoriesList && categoriesList !== '') {
      categoriesQuery = `categories=${categoriesList}`;
    }

    // price query
    const priceFromQuery = priceFrom ? `&priceFrom=${priceFrom}` : '';
    const priceToQuery = priceTo ? `&priceTo=${priceTo}` : '';

    const response = await fetch(`https://e-commerce.gettealan.com/api/v1/products?${categoriesQuery}${priceFromQuery}${priceToQuery}`);
    const products = await response.json();

    setProducts(products);
    setIsSearchLoading(false);
  }

  const handleClickCategory = (e, category) => {
    const isChecked = e.target.checked;
    const isAllChecked = categories[0].checked;

    const newCategories = categories.map((element) => {
      if (category === 'All') {
        if (element.name !== 'All') {
          element.checked = false;
        } else {
          element.checked = isChecked;
        }
      } else if (element.name === category && !isAllChecked) {
        element.checked = isChecked;
      }

      return element;
    });

    setCategories(newCategories);
  }; 

  useEffect(() => {
    const category = searchParams.get("category");

    fetch('https://e-commerce.gettealan.com/api/v1/categories')
      .then((response) => {
        response.json().then((result) => {
          result.unshift({ id: 0, name: "All", checked: false });

          const categoriesModified = result.map((element) => {
            return {
              ...element, 
              checked: (category && element.name.toLowerCase() === category),
            }
          });

          setCategories(categoriesModified);
          setIsLoading(false);

          if (category) {
            setCategory(category);
            search(categoriesModified);
          }  
        });
    }).catch((error) => {
      console.log('Error', error);
    });
  }, []);

  return (
    <>
      { isLoading ? (
        <section className="search-loading">
          <div className="search-wrapper">
            <Loading />
          </div>          
        </section> ) : (
        <>
          <section className="search" ref={reference}>
            <Title text="Search" />
            <section className="search-container">
              <section className="search-list">
                { isSearchLoading && (
                  <div className="loading-container">
                    <Loading />
                  </div>                
                )}
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
                    shippingCost={product.shipping_cost}
                    to={`/product-detail/${product.id}`}
                  ></Product>
                ))}
              </section>
              <section className="filters-container">
                <section className="search-filters">
                  <div className="header">
                    <h2 className="subtitle">Filters</h2>
                  </div>
                  <div className="content">
                    <div className="section-filters">
                      <h2 className="subtitle">Condition</h2>
                      <div className="condition-container">
                        <Checkbox text="New"></Checkbox>
                        <Checkbox text="Used"></Checkbox>
                      </div>
                    </div>

                    <div className="section-filters">
                      <h2 className="subtitle">Price</h2>
                      <div className="price-container">
                        <InputText placeholder="Min" onChange={e => setPriceFrom(e.target.value)}/>
                        <span className="paragraph">-</span>
                        <InputText placeholder="Max" onChange={e => setPriceTo(e.target.value)}/>
                      </div>
                    </div>

                    <div className="section-filters">
                      <h2 className="subtitle">Categories</h2>
                      <div className="categories-container">
                        { categories.map((category) => (
                          <Checkbox id={category.id} text={category.name} handleClick={(e) => handleClickCategory(e, category.name)} checked={category.checked}></Checkbox>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="footer">
                    <Button text="Search" handleClick={search}></Button>     
                  </div>
                </section>   
              </section>
            </section>
          </section>
        </>
      )} 
    </>
  );
}
