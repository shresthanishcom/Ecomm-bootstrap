import React from "react";

export default function Search() {
  return (
    <>
      <input className="search-box" type="text" placeholder="Search" />
      <button type="button" className="btn btn-danger search-button">
        Search
      </button>
    </>
  );
}
