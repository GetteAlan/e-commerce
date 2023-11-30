import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import "./index.scss";

export default function Pagination({handleClick, pages}) {
  const [currentPage, setCurrentPage] = useState(1);

  const previewPage = () => {
    console.log('previewPage');
  };

  const nextPage = () => {
    console.log('nextPage');
  };

  return (
    <section className="pagination">
      <div className="">
        <button className="page-option" onClick={previewPage}>{"<"}</button>

      </div>
      <div className="pages-wrapper">
        <button className="page-option">{currentPage}</button>
        <span className="pages-of">de {pages}</span>
        
      </div>
      <div className="">
        <button className="page-option" onClick={nextPage} disabled>{">"}</button>
      </div>
    </section>
  );
}

Pagination.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};
