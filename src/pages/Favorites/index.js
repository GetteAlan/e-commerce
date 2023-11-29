import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.scss";

import Title from '../../components/Title';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import ProductPreview from '../../components/ProductPreview';
import AccountSvg from '../../assets/account.svg';

export default function Favorites({reference}) {
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites([]);
    setIsLoading(false);
  }, []);

  return (
    <section className="favorites" ref={reference}>
      <Title text="Favorites"/>
      <section className="favorites-container">
        <div className="products-container">
          { isLoading && (
            <div className="loading-container">
              <Loading />
            </div>
          )}
          { favorites.length === 0 && (
            <section className="account-empty-wrapper">
              <div className="svg-description">
                <img className="account-svg" src={AccountSvg}></img>
              </div>
              <div className="empty-description">
                <span className="paragraph">Here you can see your favorites list.</span>
                <span className="paragraph"><Link to='/login'>Sign in</Link> to view your favorites.</span>
              </div>
            </section>
          )}
          { favorites.map((product) => (
            <ProductPreview id={product.id} title={product.title} description={product.description} price={product.price} count={product.count}></ProductPreview>
          ))}
        </div>
      </section>
    </section>
  );
}