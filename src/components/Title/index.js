import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default function Title({text}) {
  return (
    <h2 className="title-h2">{text}</h2>
  );
}

Title.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};