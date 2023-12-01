import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import "./index.scss";

export default function Pagination({handleChangePage, totalPages, currentPage, setCurrentPage}) {

  const previewPage = () => {
    if (currentPage > 1) {
      const newCurrentPage = currentPage - 1;
      setCurrentPage(newCurrentPage);
      handleChangePage(newCurrentPage);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      const newCurrentPage = currentPage + 1;
      setCurrentPage(newCurrentPage);
      handleChangePage(newCurrentPage);
    }
  };

  return (
    <section className="pagination">
      <div className="">
        <button className="page-option" onClick={previewPage}>{"<"}</button>

      </div>
      <div className="pages-wrapper">
        <div className="current-page">{currentPage}</div>
        <span className="pages-of">de {totalPages}</span>
        
      </div>
      <div className="">
        <button className="page-option" onClick={nextPage}>{">"}</button>
      </div>
    </section>
  );
}

Pagination.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};
