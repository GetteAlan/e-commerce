import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default function Button({text, handleClick, width, height, hierarchy='primary'}) {
  return (
    <button className={`button ${hierarchy}`} onClick={handleClick}>
      <span className="text">{text}</span>
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};
