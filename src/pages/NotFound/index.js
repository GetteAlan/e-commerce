import React from "react";

import './index.scss';
import NotFoundSVG from '../../assets/not-found.svg';

const NotFound = () => {
  return (
    <section className="not-found">
      <img className="not-found-img" src={NotFoundSVG}></img>
    </section>
  );
};

export default NotFound;
