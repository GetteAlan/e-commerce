import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default function Checkbox({text, handleClick}) {
  return (
    <div class="form__privacy">
      <input id="checkbox" name="checkbox" type="checkbox" required />
      <label className="label-checkbox" for="checkbox">{text}</label>
    </div>
  );
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};
