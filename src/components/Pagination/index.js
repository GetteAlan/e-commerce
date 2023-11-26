import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default function Pagination({text, handleClick, width, height, hierarchy='primary'}) {
  return (
    <button className={`button ${hierarchy}`} onClick={handleClick}>
      <span className="text">{text}</span>
    </button>
  );
}

Pagination.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};
