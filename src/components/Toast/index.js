import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default function Toast({children}) {
  return (
    <div id="snackbar">{children}</div>
  );
}

Toast.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
};
