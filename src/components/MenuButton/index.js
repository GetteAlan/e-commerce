import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export default function MenuButton({ text, to, handlingClick }) {
  return (
    <section className="menu-button">
      <Link className="link" to={to}>
        <button className="option-link" type="button" onClick={handlingClick}>{text}</button>
      </Link>      
    </section>
  );
}
