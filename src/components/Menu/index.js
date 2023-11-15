import React from "react";
import "./index.scss";

import Logo from '../../assets/logo.svg';
import SearchBar from "../SearchBar";
import Account from "../Account";

export default function Menu({ options, isHomeInViewport }) {
  const buttonClassOnShow = isHomeInViewport ? 'hide' : '';

  return (
    <nav className="menu">
      <div className="logo-container">
        <img className="logo" src={Logo}></img>
        <h2 className="text">E-Commerce</h2>
      </div>
      <div className="search-container">
        <SearchBar />
      </div>
      

      
{/*       <ul className="options">
        { options?.map(option =>
          (<li className="option" key={option.key}>
            <button className="option-link"
              type="button" 
              onClick={() => option.ref.current?.scrollIntoView({behavior: 'smooth'})}
            >{option.title}</button>
          </li>)
        )}
      </ul> */}
      <div className="extra-options">
          <Account />
      </div>      
    </nav>
  );
}