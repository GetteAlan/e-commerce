import React from 'react';
import PropTypes from "prop-types";
import "./index.scss";

import Title from '../../components/Title';
import Button from '../../components/Button';

export default function Login({reference}) {

  return (
    <section className="login" ref={reference}>
      <Title text="Login"/>
      <section className="login-container">
        <div className='inputs-container'>
          <input placeholder="email" className="input" name="text" type="text" />
          <input placeholder="password" className="input" name="text" type="text" />
        </div>
        <div className="button-container">
          <Button text="Sing in"></Button>
          <Button text="Sing up"></Button>
        </div>
      </section>
    </section>
  );
}