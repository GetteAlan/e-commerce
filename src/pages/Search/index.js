import React from 'react';
import PropTypes from "prop-types";
import "./index.scss";

import Title from '../../components/Title';

export default function Search({reference}) {

  return (
    <section className="search" ref={reference}>
      <Title text="Search" />
      <section className="search-list">
      </section>
    </section>
  );
}