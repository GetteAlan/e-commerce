import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.scss";

import Title from '../../components/Title';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import ProductPreview from '../../components/ProductPreview';
import PurchaseSummary from '../../components/PurchaseSummary';
import CartEmpty from '../../assets/cart-empty.svg';
import { useAuth } from "../../providers/authProvider";
import { useCart } from "../../providers/cartProvider";

import { getProductsById } from '../../services/products';

export default function Cart({reference}) {
  const { token, account } = useAuth();
  const { cart, fetchCurrentCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    if (account && token) { 
      setIsLoading(true);
      const idProducts = cart?.map(product => product.idProduct);
    
      // fetching the products
      (async() => {
        const response = await getProductsById(idProducts);
  
        setCartProducts(response.products);
        setIsLoading(false);
      })();
    }
  }, [cart, account, token]);

  const getQuantity = (product) => {
    const cartFiltered = cart.filter(item => item.idProduct === product.id)[0];

    return cartFiltered.quantity;
  }

  return (
    <section className="cart" ref={reference}>
      <Title text="Cart"/>
      <section className="cart-container">
        <section className="products-content">
          <div className="products-container">
            { isLoading && (
              <div className="loading-wrapper">
                <Loading />
              </div>
            )}
            { !isLoading && cartProducts?.length === 0 && (
              <section className="cart-empty-wrapper">
              <div className="svg-description">
                <img className="cart-svg" src={CartEmpty}></img>
              </div>
              <div className="empty-description">
                <span className="paragraph">Here you can see your cart list.</span>
                <span className="paragraph"><Link to='/login'>Sign in</Link> to view your cart.</span>
              </div>
            </section>
            )}
            { cartProducts?.map((product) => (
              <ProductPreview 
                id={product.id} 
                name={product.name} 
                price={product.price} 
                initialQuantity={getQuantity(product)}
              ></ProductPreview>
            ))}
          </div>
        </section>
        { !isLoading && cartProducts.length > 0 && (
          <section className="summary-content">
            <PurchaseSummary products={cartProducts} />
          </section>
        )}
      </section>
    </section>
  );
}
