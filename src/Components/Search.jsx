import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchList, setSearchList] = useState([]);
  const navigate = useNavigate();

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

  const handleSubmit = (e, id) => {
    e.preventDefault();
    navigate(`/search/${searchValue}`);
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
      <input className="search-box" type="text" placeholder="Search" />
      <button type="button" className="btn btn-danger search-button">
        Search
      </button>
    </>
  );
}
//   return (
//     <>
//       <div className="col-10 col-sm-9 col-md-9 col-lg-10 search-bar ">
//         <input
//           list="searchlists"
//           className="form-control h-100 "
//           type="search"
//           value={searchValue}
//           onChange={handleSearch}
//           placeholder="Search"
//           aria-label="Search"
//         />
//         {showLists()}
//       </div>
//       <div className="col-2 col-sm-3 col-md-3 col-lg-2 d-flex  ">
//         <button
//           className="btn btn-success search-btn "
//           onClick={(e) => handleSubmit(e)}
//           type="submit"
//         >
//           Search
//         </button>

//         <button
//           className="btn text-white search-icon "
//           onClick={(e) => handleSubmit(e)}
//           type="submit"
//         >
//           <i className="fa-solid fa-magnifying-glass"></i>
//         </button>
//       </div>
//     </>
//   );
