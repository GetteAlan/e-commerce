import React, { useState } from "react";
import PropTypes from "prop-types";
import "./index.scss";

import Loading from "../Loading";

export default function IncreaseDecreaseInput({quantity, handleDecrease, handleIncrease}) {
  const [isDecreaseLoading, setIsDecreaseLoading] = useState(false);
  const [isIncreaseLoading, setIsIncreaseLoading] = useState(false);

  const onClickDecrease = async () => {
    setIsDecreaseLoading(true);
    await handleDecrease();
    setIsDecreaseLoading(false);
  };

  const onClickIncrease = async () => {
    setIsIncreaseLoading(true);
    await handleIncrease();
    setIsIncreaseLoading(false);
  };

  return (
    <form>
      <div className="value-button" id="decrease" onClick={onClickDecrease} value="Decrease Value">
        { isDecreaseLoading ? (<div className="button-loading"><Loading /></div>) : (<p className="button-text">-</p>)}
      </div>
      <input type="number" id="number" value={quantity} />
      <div className="value-button" id="increase" onClick={onClickIncrease} value="Increase Value">
        { isIncreaseLoading ? (<div className="button-loading"><Loading /></div>) : (<p className="button-text">+</p>)}
      </div>
    </form>
  );
}

IncreaseDecreaseInput.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};
