import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default function Switch({text, handleClick}) {
  return (
    <input type="checkbox" />
  );
}

Switch.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};
