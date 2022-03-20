import React, { useState } from "react";

export default function Paginate(props) {
  const { totalItemsLength, itemsPerPage, handleClick, currentPageNumber } =
    props;
  const [state, setState] = useState({});
  const totalPages = Math.ceil(totalItemsLength / itemsPerPage);
  const displayPages = () => {
    let pagesList = [];
    for (let i = 1; i <= totalPages; i++) {
      if (parseInt(currentPageNumber) === i) {
        pagesList.push(
          <li className="activePageNumber" id={i}>
            {i}
          </li>
        );
      } else {
        pagesList.push(<li id={i}>{i}</li>);
      }
    }
    return pagesList;
  };
  const displayPreviousButton = () => {
    return parseInt(currentPageNumber) === 1 ? (
      <button id="previous" disabled className="btn btn-danger">
        Previous
      </button>
    ) : (
      <button id="previous" className="btn btn-danger">
        Previous
      </button>
    );
  };
  const displayNextButton = () => {
    return parseInt(currentPageNumber) ===
      Math.ceil(totalItemsLength / itemsPerPage) ? (
      <button disabled id="next" className="btn btn-warning">
        Next
      </button>
    ) : (
      <button id="next" className="btn btn-warning">
        Next
      </button>
    );
  };
  return (
    <div className="paginate-container">
      <ul onClick={handleClick} className="d-flex ">
        {displayPreviousButton()}
        {displayPages()}
        {displayNextButton()}
      </ul>
    </div>
  );
}
