import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default function IncreaseDecreaseInput({quantity, handleDecrease, handleIncrease}) {

  return (
    <form>
      <div className="value-button" id="decrease" onClick={handleDecrease} value="Decrease Value">-</div>
      <input type="number" id="number" value={quantity} />
      <div className="value-button" id="increase" onClick={handleIncrease} value="Increase Value">+</div>
    </form>
  );
}

IncreaseDecreaseInput.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};
