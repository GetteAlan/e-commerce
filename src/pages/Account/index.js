import React from 'react';
import PropTypes from "prop-types";
import "./index.scss";

import Title from '../../components/Title';

export default function Account({reference}) {

  return (
    <section className="account" ref={reference}>
      <Title text="Account" />
      <section className="container">
      </section>
    </section>
  );
}