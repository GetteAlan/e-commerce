import React from "react";
import PropTypes from "prop-types";
import Button from '../Button';
import ButtonSecondary from '../ButtonSecondary';
import Link from '../Link';

import "./index.scss";

export default function Card({ title, description, image, hierarchy, handleClick, handleSecondaryClick }) {

  const HIERARCHY = {
    PRIMARY: '',
    SECONDARY: '',
  }



  return (
    <div className='card'>
      <div className='card-background-1'>
        <div className='card-background-2'></div>
      </div>

      <div className='card-content'>
        <img className="image" src={image} alt="" loading="lazy"></img>
        <div className="description">
          <h2 className="subtitle">{title}</h2>
          <p className="paragraph">{description}</p>
        </div>
        <div className="button-container">
          <ButtonSecondary className="secondary" text="Code" handleClick={handleClick}></ButtonSecondary>
          <ButtonSecondary className="secondary" text="Visit" handleClick={handleSecondaryClick}></ButtonSecondary>
        </div>        
      </div>
    </div>
  );
}