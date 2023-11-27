import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default function InputText({value, placeholder, onChange}) {
  return (
    <input className="input-text" placeholder={placeholder} type="text" value={value} onChange={onChange}/>
  );
}

InputText.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};