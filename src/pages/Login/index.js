import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.scss";

import Title from '../../components/Title';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import { useAuth } from "../../providers/authProvider";
import { useCart } from "../../providers/cartProvider";

import { login } from '../../services/login';

export default function Login({reference}) {
  const { setToken, setAccount } = useAuth();
  const { fetchCurrentCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [errorLogin, setErrorLogin] = useState(false);
  const navigate = useNavigate();

  const onSubmitHandling = async (event) => {
    event.preventDefault();

    if (!username || !password) {
      return;
    }

    setIsLoading(true);
    setErrorLogin(false);

    try {
      const response = await login({username, password});
      const token = response?.token;
      const account = response?.account;
  
      setAccount(account);
      setToken(token);
  
      if (token && account) {
        await fetchCurrentCart(account.id);
        navigate('/');
  
        return;
      }
  
      throw new Error('Error login');
    }
    catch (error) {
      console.log('Error', error);
      setAccount();
      setToken();
      setErrorLogin(true);
    }
    finally {
      setIsLoading(false);
    }
  };

  const handleClickSignup = ()=> {
    navigate('/signup');
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
          <div className="inputs-container">
            <input placeholder="email" className="input" name="email" type="text" onChange={e => setUsername(e.target.value)} disabled={isLoading}/>
            <input placeholder="password" className="input" name="password" type="password" onChange={e => setPassword(e.target.value)} disabled={isLoading}/>
          </div>
          <div className="button-container">
            { isLoading ? (
              <div className="loading-wrapper">
                <Loading />
              </div>              
            ) : (
              <>
                <Button text="Sing in"></Button>
                <Button text="Sing up" hierarchy="secondary" handleClick={handleClickSignup}></Button>
              </>
            )}
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