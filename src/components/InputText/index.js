import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default function InputText({value, placeholder, handleClick, width, height}) {
  return (
    <input className="input-text" placeholder={placeholder} type="text" value={value}/>
  );
}

InputText.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};