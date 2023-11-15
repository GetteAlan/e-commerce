import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default function Account({text, handleClick, width, height}) {
  return (
    <div class="wrapper">
      <div class="user-card">
        <div class="user-card-img">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png" alt="" />
        </div>
        <div class="user-card-info">
          <h2>Mohamed Yousef</h2>
          <p>example@example.com</p>
        </div>
      </div>
  </div>
  );
}

Account.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};