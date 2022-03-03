import React, { useEffect, useState } from "react";

import Product from "./Product";
import axios from "axios";

function SpecificProduct(props) {
  const numberOfItems = 4; //number of items to show

  const [state, setState] = useState({
    products: [],
    trimmedProducts: [],
    initialIndex: 0,
    latestIndex: numberOfItems,
  });

  const setProducts = (products) => {
    setState({
      ...state,
      products,
      trimmedProducts: products.slice(state.initialIndex, state.latestIndex),
    });
  };
  useEffect(() => {
    async function getProducts() {
      await axios
        .get("http://localhost:5000/product/")
        .then((res) => {
          const products = res.data;
          console.log("from the server products", products);
          setProducts(products);
        })
        .catch((err) => console.log("error while getting products", err));
    }
    getProducts();
  });

  const nextSlice = () => {
    let { initialIndex, latestIndex } = state;
    initialIndex += numberOfItems;
    latestIndex += numberOfItems;
    setState({
      ...state,
      initialIndex,
      latestIndex,
      trimmedProducts: state.products.slice(initialIndex, latestIndex),
    });
  };

  const previousSlice = () => {
    let { initialIndex, latestIndex } = state;
    initialIndex -= numberOfItems;
    latestIndex -= numberOfItems;
    setState({
      ...state,
      initialIndex,
      latestIndex,
      trimmedProducts: state.products.slice(initialIndex, latestIndex),
    });
  };
  const showProducts = () => {
    return state.trimmedProducts.map((product) => {
      return <Product key={product._id} product={product} />;
    });
  };

  const handleClick = (e) => {
    switch (e.currentTarget.name) {
      case "next":
        if (state.latestIndex < state.products.length) {
          console.log("next clicked");
          nextSlice();
        }
        break;
      case "previous":
        if (state.initialIndex > 0) {
          console.log("next clicked");
          previousSlice();
        }

        break;
      default:
    }
  };

  return (
    <div>
      <div className="specific-products">
        <div className="row">
          <div className="col-6">
            <h1>{props.title}</h1>
          </div>
          <div className="col-6 ml-auto">
            <button
              name="previous"
              className={
                state.initialIndex > 0
                  ? "btn btn-primary"
                  : "btn btn-primary disabled"
              }
              onClick={handleClick}
            >
              <i className=" fas fa-arrow-left"></i>
            </button>
            <button
              name="next"
              className={
                state.latestIndex < state.products.length
                  ? "btn btn-danger"
                  : "btn btn-danger disabled"
              }
              onClick={handleClick}
            >
              <i className="  fas fa-arrow-right "></i>
            </button>
          </div>
        </div>
        <div className="row">{showProducts()}</div>
      </div>
    </div>
  );
}

export default SpecificProduct;
