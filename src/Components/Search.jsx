import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchList, setSearchList] = useState([]);

  const getLists = async () => {
    await axios
      .get("http://localhost:5000/product/lists")
      .then((res) => {
        setSearchList(res.data);
      })
      .catch((err) =>
        console.log("error occured while fetching search list", err)
      );
  };
  useEffect(() => {
    getLists();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const showLists = () => {
    return (
      <datalist id="searchlists">
        <option value="anish" />
        {searchList.map((list) => {
          return <option key={list._id} value={list.name} />;
        })}
      </datalist>
    );
  };
  return (
    <>
      <input
        list="searchlists"
        className="form-control "
        type="search"
        value={searchValue}
        onChange={handleSearch}
        placeholder="Search"
        aria-label="Search"
      />
      {showLists()}

      <button
        className="btn btn-outline-success "
        onClick={handleSubmit}
        type="submit"
      >
        Search
      </button>
    </>
  );
}

export default Search;
