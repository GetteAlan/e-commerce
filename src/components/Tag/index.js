import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default function Tag({text, color, textColor}) {
  return (
    <div className="tag" style={{backgroundColor: color}}>
      <span className="text" style={{color: textColor}}>{text}</span>
    </div>
  );
}

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.func,
};