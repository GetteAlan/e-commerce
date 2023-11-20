import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default function IncreaseDecreaseInput({value, handleClick, width, height, hierarchy='primary'}) {
  return (
    <form>
      <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
      <input type="number" id="number" value={value} />
      <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value">+</div>
    </form>
  );
}

IncreaseDecreaseInput.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};
