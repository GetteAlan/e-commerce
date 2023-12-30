import React, { useState, useEffect} from 'react';
import "./index.scss";

import Title from '../../components/Title';
import Product from '../../components/Product';
import Loading from '../../components/Loading';

import { getBestSellers } from '../../services/bestSellers';

export default function BestSellers({reference}) {
  const [isLoading, setIsLoading] = useState(false);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    (async() => {
      const response = await getBestSellers();
      setBestSellers(response.products);
      setIsLoading(false);
    })();
  }, []);

  return (
    <section className="best-sellers" ref={reference}>
      <Title text="Best Sellers" />
      { isLoading && (
        <div className="loading-wrapper">
          <Loading />
        </div>
      )}
      <section className="best-sellers-list">
        { bestSellers?.map((product) => (
          <Product
            id={product.id}
            title={product.name} 
            description={product.description} 
            price={product.price}
            to={product.to}
          ></Product>
        ))}
      </section>
    </section>
  );
}
