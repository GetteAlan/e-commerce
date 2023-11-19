import React from 'react';
import PropTypes from "prop-types";
import "./index.scss";

import Title from '../../components/Title';

export default function Purchases({reference}) {

  return (
    <section className="purchases" ref={reference}>
      <Title text="Purchases" />
      <section className="container">
      </section>
    </section>
  );
}