import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default function Button({text, handleClick, width, height, hierarchy='primary'}) {
  return (
    <blockquote>
      <p>Por si no lo tienes claro, un <em>commit</em> es un conjunto de cambios en los archivos que hemos dado por buenos y que queremos almacenar como una instantánea&nbsp;de cara al futuro. Los <em>commits</em> se relacionan unos con otros en una&nbsp;o varias secuencias para poder ir viendo la historia de un determinado archivo a lo largo del tiempo. Es el concepto central de todo&nbsp;sistema de control de código.</p>
    </blockquote>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};
