import React from 'react';
import "./index.scss";

import Title from '../../components/Title';
import Card from '../../components/Card';
import categories from '../../assets/data/categories.json';

export default function Categories({reference}) {
  return (
    <section className="categories" ref={reference}>
      <Title text="Categories" />
      <section className="categories-list">
        { categories.map((category) => (
          <Card to={category.to}>
            <div className="category">
              <span className="text">{category.content}</span>
            </div>            
          </Card>
        ))}
      </section>
    </section>
  );
}
