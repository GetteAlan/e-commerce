import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom"
import PropTypes from "prop-types";
import "./index.scss";

import Title from '../../components/Title';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import Tag from '../../components/Tag';

export default function ProductDetail({reference}) {
  const [isLoading, setIsLoading] = useState(true);
  const [cartProducts, setCartProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const { idProduct } = useParams();
  const freeTagColor = '#e6f7ee';
  const freeTagBorderColor = '#1c6415';
  const freeTagTextColor = '#00a650';

  useEffect(() => {
    console.log('idProduct', idProduct);
    // const cartProducts = JSON.parse(localStorage.getItem('products-cart'));
    // setCartProducts(cartProducts);
    fetch(`https://e-commerce.gettealan.com/api/v1/products/${idProduct}`)
    .then((response) => {
      response.json().then((result) => {
        const product = result[0];
        //const shippingCost = product.shipping_cost ? `US$ ${product.shipping_cost}` : 'FREE';
console.log('', product.shipping_cost);
/*         const productTransformed = {
          ...product,
          price: `US$ ${product.price}`,
          shipping_cost: shippingCost,
        };    */     

        setProduct(product);
       //setIsLoading(false);
      });
      
    }).catch((error) => {
      console.log('Error', error);
    }).finally(() => {
      setIsLoading(false);
    });

    //setIsLoading(false);
  }, []);

  return (
    <section className="product-detail" ref={reference}>
      <Title text="Product Detail"/>
      { product && (
        <section className="product-detail-container">
          <section className="product-image card-styled">
            <img src={`../images/products/${product.id}-image.webp`} alt={product.name}></img>
          </section>
          <section className="product-information card-styled">
            <h2 className="product-title">{product.name}</h2>
            <h3 className="product-title">Description</h3>
            <span className="product-title">{product.description}</span>
          </section>
          <section className="product-purchase card-styled">
            <div>
              <h3>Price</h3>
              <p className="paragraph">US$ {product.price}</p>
            </div>
            <div>
              <h3>Shipping cost</h3>
              { product.shipping_cost > 0.00 ? (
                <p className="paragraph">US$ {product.shipping_cost}</p>
              ) : (
                <Tag color={freeTagColor} borderColor={freeTagBorderColor} textColor={freeTagTextColor}>Free</Tag>
              )}
            </div>
            <Button text={'Add to cart'}></Button>
          </section>
        </section>
      )}
      { isLoading && (<Loading />) }
    </section>
  );
}