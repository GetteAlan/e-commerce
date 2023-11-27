import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from '../../components/Button';
import Checkbox from "../Checkbox";
import InputText from "../InputText";
import "./index.scss";

export default function SearchFilters({
  title,
  subtitle,
  filters,
  categories,
  handleClick,
  children,
}) {
  const [filterCategories, setFilterCategories] = useState(categories);
  
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

    setFilterCategories(newCategories);
  };  

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
            { categories.map((category) => (
              <Checkbox id={category.id} text={category.name} handleClick={(e) => handleClickCategory(e, category.name)} checked={category.checked}></Checkbox>
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
