import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default function Checkbox({id, text, handleClick, checked}) {
  return (
    <div class="form__privacy">
      <input id="checkbox" name="checkbox" type="checkbox" required onClick={handleClick} checked={checked} />
      <label className="label-checkbox" for="checkbox">{text}</label>
    </div>
  );
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};
