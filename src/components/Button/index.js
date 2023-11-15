import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default function Button({text, handleClick, width, height}) {
  return (
    <button className="button" onClick={handleClick}>
      <span class="text">{text}</span>
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};