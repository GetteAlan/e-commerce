import React from "react";
import "./index.scss";

import Logo from '../../assets/logo.svg';
import Cart from '../../assets/cart.svg';
import SearchBar from "../SearchBar";
import Account from "../Account";

export default function Menu({ options, isHomeInViewport }) {
  const buttonClassOnShow = isHomeInViewport ? 'hide' : '';

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
          <Account />
        </div> 
      </header>

      <section className="menu-content">
        <nav className="menu">
          <ul className="options">
            { options?.map(option =>
              (<li className="option" key={option.key}>
                <button className="option-link"
                  type="button" 
                  onClick={() => option.ref.current?.scrollIntoView({behavior: 'smooth'})}
                >{option.title}</button>
              </li>)
            )}
          </ul>     
        </nav>

        <img className="cart" src={Cart}></img>
      </section>
    </section>
  );
}
