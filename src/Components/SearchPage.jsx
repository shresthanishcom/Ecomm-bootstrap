import React from "react";
import { useParams } from "react-router";

function SearchPage() {
  const { id: searchValue } = useParams();

  return <div>search for {searchValue} results are:</div>;
}

export default SearchPage;
