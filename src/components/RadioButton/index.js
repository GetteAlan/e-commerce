import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default function RadioButton({id, title, children, }) {
  return (
    <fieldset className="radio-button" id={id}>
      <legend>{title}</legend>
      <div class="radio-item-container">
        {
          children.map((item) => (
            <div class="radio-item">
              <label for={item.id}>
                <input type="radio" id={item.id} name={item.name} value={item.value}/>
                <p>{item.label}</p><img class="icon" src={item.icon}/>
              </label>
            </div>
          ))
        }
      </div>
    </fieldset>
  );
}

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};
