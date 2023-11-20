import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

import Logo from '../../assets/logo.svg';
import Cart from '../../assets/cart.svg';
import MenuMobile from '../../assets/menu-mobile.svg';
import SearchBar from "../SearchBar";
import Account from "../Account";

import Button from '../Button';
import MenuButton from "../MenuButton";

export default function Menu({ options }) {
  return (
    <section className="menu-container">
      <header className="menu-header">
        <div className="logo-container">
          <img className="logo" src={Logo}></img>
          <h2 className="text">E-Commerce</h2>
        </div>
        <div className="search-container">
          <SearchBar />
        </div>
        <div className="extra-options">
          <img className="menu-mobile" src={MenuMobile}></img>
        </div> 
      </header>

      <section className="menu-content">
        <nav className="menu">
          <ul className="options">
            { options?.map(option =>
              (<li className="option" key={option.key}>
                <Link className="link" to={option.to}>
                  <button className="option-link" type="button">{option.title}</button>
                </Link>
              </li>)
            )}
          </ul>     
        </nav>

        <div className="aside-options">
          <MenuButton text="Login" to="login"></MenuButton>
          <Link className="cart-link" to="cart">
            <img className="cart-svg" src={Cart}></img>
          </Link>          
        </div>
      </section>
    </section>
  );
}
