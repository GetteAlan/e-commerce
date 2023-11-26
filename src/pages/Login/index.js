import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.scss";

import Title from '../../components/Title';
import Button from '../../components/Button';

export default function Login({reference}) {
  const [token, setToken] = useState();
  const [isLoading, setIsLoading] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [errorLogin, setErrorLogin] = useState(false);
  const navigate = useNavigate();

  const onSubmitHandling = (event) => {
    event.preventDefault();
    setErrorLogin(false);

    fetch('https://e-commerce.gettealan.com/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
      })
    })
    .then((response) => {
      response.json().then((result) => {

        if (result?.token) {
          sessionStorage.setItem('token', JSON.stringify(result.token));
          navigate('/');

          return;
        }


        throw new Error('Error login');

        //setIsLoading(false);
      });
    }).catch((error) => {
      console.log('Error', error);
      setErrorLogin(true);
    }).finally(() => {
      setIsLoading(false);
    });
  };

  useEffect(() => {
    const currentToken = sessionStorage.getItem('token');

    if (currentToken) {
      //navigate('/');
    }

  }, []);

  return (
    <section className="login" ref={reference}>
      <Title text="Login"/>
      <section className="login-container">
        <form className="login-form" onSubmit={onSubmitHandling}>
          <div className='inputs-container'>
            <input placeholder="email" className="input" name="email" type="text" onChange={e => setUsername(e.target.value)} />
            <input placeholder="password" className="input" name="password" type="password" onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="button-container">
            <Button text="Sing in"></Button>
            <Button text="Sing up" hierarchy="secondary"></Button>
          </div>
        </form>

      </section>
      { errorLogin && (
        <section className="messages-wrapper">
          <span className="message error">Error trying to login.</span>
        </section>
      )}
    </section>
  );
}