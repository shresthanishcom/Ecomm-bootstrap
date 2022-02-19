import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Product from "./Product";
import axios from "axios";

function SpecificProduct(props) {
  const [products, setProducts] = useState([]);

  const numberOfItems = 4; //number of items to show

  const [state, setState] = useState({
    trimmedProducts: [],
    initialIndex: 0,
    latestIndex: numberOfItems,
  });

  useEffect(() => {
    async function getProducts() {
      await axios
        .get("http://localhost:5000/product/newproducts")
        .then((res) => {
          const products = res.data;
          console.log("from the server products", products);
          setProducts(products);
          slicer();
        })
        .catch((err) => console.log("error while getting products", err));
    }
    getProducts();
  }, []);

  const slicer = () => {
    if (products.length > numberOfItems) {
      setState({
        ...state,
        trimmedProducts: products.slice(state.initialIndex, state.latestIndex),
        initialIndex: state.initialIndex + 4,
        latestIndex: state.latestIndex + 4,
      });
    } else {
      setState({ ...state, trimmedProducts: products });
    }
  };
  const showProducts = () => {
    return state.trimmedProducts.map((product) => {
      return <Product key={product._id} product={product} />;
    });
  };

  const handleButton = (e) => {
    console.log("clicked column", e.target.name);
    switch (e.target.name) {
      case "next":
        console.log("nextclick");
        slicer();
        break;
      case "previous":
        break;
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
            <FontAwesomeIcon
              className="mr-2 btn btn-primary"
              icon={faArrowLeft}
            />
            <FontAwesomeIcon
              name="next"
              className="mr-2 btn btn-danger"
              icon={faArrowRight}
            />
          </div>
        </div>
        <div className="row">{showProducts()}</div>
      </div>
    </div>
  );
}

export default SpecificProduct;
