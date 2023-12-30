import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.scss";

import Title from '../../components/Title';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import { useAuth } from "../../providers/authProvider";
import { signUp } from '../../services/login';

export default function SignUp({reference}) {
  const { setToken, setAccount } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [errorLogin, setErrorLogin] = useState(false);
  const navigate = useNavigate();

  const onSubmitHandling = async (event) => {
    try {
      event.preventDefault();

      if (!username || !password) {
        return;
      }
  
      setIsLoading(true);
      setErrorLogin(false);
  
      const response = await signUp({username, password,}); 
      const token = response?.token;
      const account = response?.account;
      
      setAccount(account);
      setToken(token);
    }
    catch(error) {
      console.log('Error', error);
      setAccount();
      setToken();
      setErrorLogin(true);
    }
    finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // validate if the user is already login.
    const currentToken = sessionStorage.getItem('token');

    if (currentToken) {
      //navigate('/');
    }

  }, []);

  return (
    <section className="sign-up" ref={reference}>
      <Title text="Sign Up"/>
      <section className="login-container">
        <form className="login-form" onSubmit={onSubmitHandling}>
          <div className="inputs-container">
            <input placeholder="First and last name" className="input" name="name" type="text" onChange={e => setName(e.target.value)} disabled={isLoading}/>
            <input placeholder="Username" className="input" name="username" type="text" onChange={e => setUsername(e.target.value)} disabled={isLoading}/>
            <input placeholder="Email" className="input" name="email" type="text" onChange={e => setEmail(e.target.value)} disabled={isLoading}/>
            <input placeholder="Password" className="input" name="password" type="password" onChange={e => setPassword(e.target.value)} disabled={isLoading}/>
            <input placeholder="Re-enter password" className="input" name="passwordCheck" type="password" onChange={e => setPasswordCheck(e.target.value)} disabled={isLoading}/>
          </div>
          <div className="button-container">
            { isLoading ? (
              <div className="loading-wrapper">
                <Loading />
              </div>              
            ) : (
              <Button text="Sing up"></Button>
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