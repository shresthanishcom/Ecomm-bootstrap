import React, { useState, useEffect } from "react";
import Product from "./Product";
import axios from "axios";
import Paginate from "../Paginate";
import Helmet from "react-helmet";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [state, setState] = useState({ currentPage: [] });
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const itemsPerPage = 4;

  const paginate = (pageNumber) => {
    const currentPage = (pageNumber - 1) * itemsPerPage;
    const nextPage = (pageNumber - 1) * itemsPerPage + itemsPerPage;
    const slicedProduct = products.slice(currentPage, nextPage);
    return slicedProduct;
  };
  useEffect(() => {
    const paginate = (pageNumber) => {
      const currentPage = (pageNumber - 1) * itemsPerPage;
      const nextPage = (pageNumber - 1) * itemsPerPage + itemsPerPage;
      const slicedProduct = products.slice(currentPage, nextPage);
      return slicedProduct;
    };
    const currentPage = paginate(currentPageNumber);
    setState((state) => ({
      ...state,
      currentPage,
    }));
  }, [products, currentPageNumber]);

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
      const previousPageNumber = currentPageNumber - 1;
      const currentPage = paginate(previousPageNumber);
      setCurrentPageNumber(previousPageNumber);
      setState({
        ...state,
        currentPage,
      });
    } else if (id === "next") {
      const nextPageNumber = currentPageNumber + 1;
      const currentPage = paginate(nextPageNumber);
      setCurrentPageNumber(nextPageNumber);
      setState({ ...state, currentPage: currentPage });
    } else {
      const currentPage = paginate(e.target.id);
      setCurrentPageNumber(e.target.id);
      setState({ ...state, currentPage });
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
      <Paginate totalItemsLength={products.length} itemsPerPage={itemsPerPage} handleClick={handleClick} currentPageNumber={currentPageNumber} />
    </>
  );
}

export default AllProducts;
