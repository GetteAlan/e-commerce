import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from '../../components/Button';
import Checkbox from "../Checkbox";
import InputText from "../InputText";
//* import Categories from '../../assets/data/categories.json';
import "./index.scss";

export default function SearchFilters({
  title,
  subtitle,
  filters,
  categories,
  handleClick,
  children,
}) {
  const [filterCategories, setFilterCategories] = useState([]);
  const handleClickCategory = (category) => {
    if (category === 'All') {
      setFilterCategories([category]);
    } else if (!filterCategories.includes(category)) {
      setFilterCategories(filterCategories.concat([category]))
    }
  };

  console.log('setFilterCategories', filterCategories);

  return (
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
            <InputText value="123" placeholder="Max"/>
            <span>-</span>
            <InputText value="456" placeholder="Min"/>
          </div>
        </div>

        <div className="section-filters">
          <h2 className="subtitle">Categories</h2>
          <div className="categories-container">
            <Checkbox id="0" text="All" handleClick={() => handleClickCategory('All')}></Checkbox>
            { categories.map((category) => (
              <Checkbox id={category.id} text={category.name} handleClick={() => handleClickCategory(category.name)}></Checkbox>
            ))}
          </div>
        </div>
      </div>
      <div className="footer">
        <Button text="Search" handleClick={handleClick}></Button>     
      </div>
      {children}
    </section>    
  );
}
