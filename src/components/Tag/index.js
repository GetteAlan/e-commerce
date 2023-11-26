import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const borderColorDefault = '#13293D';
const colorDefault = '#0f4374';
const textColorDefault = '#E8F1F2';

export default function Tag({color = colorDefault, textColor = textColorDefault, borderColor = borderColorDefault, children}) {
  return (
    <div className="tag" style={{backgroundColor: color, borderColor: borderColor}}>
      <span className="text" style={{color: textColor }}>{children}</span>
    </div>
  );
}

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.func,
};