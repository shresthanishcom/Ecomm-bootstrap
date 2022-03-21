import React, { useState, useEffect } from "react";
import Product from "./Product";
import axios from "axios";
import Paginate from "../Paginate";
import Helmet from "react-helmet";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [state, setState] = useState({ currentPageNumber: 1, currentPage: [] });

  const itemsPerPage = 4;

  const paginate = (pageNumber) => {
    const currentPage = (pageNumber - 1) * itemsPerPage;
    const nextPage = (pageNumber - 1) * itemsPerPage + itemsPerPage;
    const slicedProduct = products.slice(currentPage, nextPage);
    return slicedProduct;
  };

  useEffect(() => {
    const currentPage = paginate(state.currentPageNumber);
    setState({
      ...state,
      currentPage,
    });
  }, [products]);

  const [loading, setLoading] = useState("true");
  useEffect(() => {
    async function getProducts() {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      console.log("products in all products from server: ", data);
      setLoading(false);
      setProducts(data);
    }
    getProducts();
    // dispatch(fetchProducts());
  }, []);

  // const products = useSelector((state) => state.cartReducer.productItems);
  const showProducts = () => {
    return state.currentPage.map((product) => {
      return <Product key={product.id} product={product} />;
    });
  };

  const handleClick = (e) => {
    const id = e.target.id;

    if (id === "previous") {
      const previousPageNumber = state.currentPageNumber - 1;
      const currentPage = paginate(previousPageNumber);
      setState({
        ...state,
        currentPage,
        currentPageNumber: previousPageNumber,
      });
    } else if (id === "next") {
      const nextPageNumber = state.currentPageNumber + 1;
      const currentPage = paginate(nextPageNumber);
      setState({ ...state, currentPage, currentPageNumber: nextPageNumber });
    } else {
      const currentPage = paginate(e.target.id);
      setState({ ...state, currentPage, currentPageNumber: e.target.id });
    }
  };
  return (
    <>
      <Helmet>
        <title>All products</title>
      </Helmet>
      <h1>All products:</h1>
      {loading && (
        <div className="lds-circle">
          <div></div>
        </div>
      )}
      {!loading && (
        <div className="container">
          <div className="row product-container "> {showProducts()}</div>
        </div>
      )}
      <Paginate
        totalItemsLength={products.length}
        itemsPerPage={itemsPerPage}
        handleClick={handleClick}
        currentPageNumber={state.currentPageNumber}
      />
    </>
  );
}

export default AllProducts;
