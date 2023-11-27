import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./index.scss";

import Title from '../../components/Title';
import Tag from '../../components/Tag';
import { ACCOUNT_STATUS } from '../../constants';
import { useAuth } from "../../providers/authProvider";
import AccountSvg from '../../assets/account.svg';

export default function Account({reference}) {
  const { account, token } = useAuth();

  return (
    <section className="account" ref={reference}>
      <Title text="Account" />
      { account ? (
        <section className="account-wrapper">
          <div className="key-value-wrapper">
            <h2 className="subtitle">Username</h2>
            <span className="paragraph">{account.username}</span>
          </div>

          <div className="key-value-wrapper">
            <h2 className="subtitle">Name</h2>
            <span className="paragraph">{account.name}</span>
          </div>

          <div className="key-value-wrapper">
            <h2 className="subtitle">Last Name</h2>
            <span className="paragraph">{account.lastName}</span>
          </div>

          <div className="key-value-wrapper">
          <h2 className="subtitle">E-mail</h2>
          <span className="paragraph">{account.email}</span>
          </div>


          <div className="key-value-wrapper">
          <h2 className="subtitle">Phone</h2>
          <span className="paragraph">{account.phone}</span>
          </div>


          <div className="key-value-wrapper">
          <h2 className="subtitle">Creation date</h2>
          <span className="paragraph">{account.created}</span>
          </div>


          <div className="key-value-wrapper">
          <h2 className="subtitle">Status</h2>
          <Tag>{ACCOUNT_STATUS[account.status]}</Tag>
          </div>

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