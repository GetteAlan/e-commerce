import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./index.scss";

export default function Card({ 
  children,
  to,
}) {

  return (
    <Link className="link" to={to}>
      <section className='card'>
        {children}
      </section>
    </Link>
  );
}
