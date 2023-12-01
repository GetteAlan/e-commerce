import React, { useState, useEffect } from 'react';
import "./index.scss";

import Title from '../../components/Title';
import Product from '../../components/Product';
import Loading from '../../components/Loading';
import { getOffers } from '../../services/offers';

export default function Offers({reference}) {
  const [isLoading, setIsLoading] = useState(false);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    (async() => {
      const response = await getOffers();
      setOffers(response.products);
      setIsLoading(false);
  })();
  }, []);

  return (
    <section className="offers" ref={reference}>
      <Title text="Offers" />
      { isLoading && (
        <div className="loading-wrapper">
          <Loading />
        </div>
      )}
      { offers && (
        <section className="offers-list">
        { offers.map((offer) => (
          <Product
            id={offer.id}
            title={offer.title} 
            description={offer.description} 
            price={offer.price}
            to={offer.to}
          ></Product>
          ))}
        </section>
      )}

    </section>
  );
}
