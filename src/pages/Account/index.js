import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.scss";

import Title from '../../components/Title';
import Tag from '../../components/Tag';
import Button from '../../components/Button';
import Loading from '../../components/Loading';

import { ACCOUNT_STATUS } from '../../constants';
import { useAuth } from "../../providers/authProvider";
import AccountSvg from '../../assets/account.svg';
import CardSvg from '../../assets/card.svg';

import { getCards } from '../../services/cards';

export default function Account({reference}) {
  const { account, token } = useAuth();
  const [cards, setCards] = useState();
  const [isLoadingCards, setIsLoadingCards] = useState(false);

  useEffect(() => {
    (async() => {
      if (account) {
        setIsLoadingCards(true);
        setCards(await getCards(account.id));
        setIsLoadingCards(false);
      }
  })();
  }, []);

  const handleDeleteCard = () => {

  };

  return (
    <section className="account" ref={reference}>
      <Title text="Account" />
      { account ? (
        <section className="account-wrapper">
          
          <article className="account-info">
            <h2 className="subtitle">Account Information</h2>
            <div className="key-value-wrapper">
              <h2 className="paragraph-key">Username</h2>
              <span className="paragraph">{account.username}</span>
            </div>
            <div className="key-value-wrapper">
              <h2 className="paragraph-key">Creation date</h2>
              <span className="paragraph">{account.created}</span>
            </div>
            <div className="key-value-wrapper">
              <h2 className="paragraph-key">Status</h2>
              <Tag>{ACCOUNT_STATUS[account.status]}</Tag>
            </div>
          </article>

          <article className="personal-info">
            <h2 className="subtitle">Personal Information</h2>
            <div className="key-value-wrapper">
              <h2 className="paragraph-key">Name</h2>
              <span className="paragraph">{account.name}</span>
            </div>
            <div className="key-value-wrapper">
              <h2 className="paragraph-key">Last Name</h2>
              <span className="paragraph">{account.lastname}</span>
            </div>
            <div className="key-value-wrapper">
              <h2 className="paragraph-key">E-mail</h2>
              <span className="paragraph">{account.email}</span>
            </div>
            <div className="key-value-wrapper">
              <h2 className="paragraph-key">Phone</h2>
              <span className="paragraph">{account.phone}</span>
            </div>
          </article>

          <article className="account-cards">
            <h2 className="subtitle">Payment methods</h2>
            <div className="cards-wrapper">
              { isLoadingCards && (
                <div className="loading-wrapper">
                  <Loading />
                </div>
              )}
              { cards?.map((card) => (
                <div className="card" id={card.id}>
                  <div className="card-content">
                    <div className="card-image-wrapper">
                      <img className="card-image" src={CardSvg}></img>
                    </div>
                    <div className="card-info">
                      <span className="main-paragraph">Ends in {card.number}</span>
                      <span className="paragraph">Brand {card.brand}</span>
                    </div>
                    <div className="button-wrapper">
                      <Button text="Delete" handleClick={() => handleDeleteCard(card.id)}></Button>
                    </div>                    
                  </div>
                </div>
              ))}
            </div>
          </article>


        </section>
      ) : (
        <section className="account-empty-wrapper">
          <div className="svg-description">
            <img className="account-svg" src={AccountSvg}></img>
          </div>
          <div className="empty-description">
            <span className="paragraph">Here you will see your account information.</span>
            <span className="paragraph"><Link to='/login'>Sign in</Link> to view your account.</span>
          </div>
        </section>
      )}
    </section>
  );
}