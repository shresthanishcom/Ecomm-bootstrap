import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Product from "./Product";
import axios from "axios";

function SpecificProduct(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      await axios
        .get("http://localhost:5000/product/newproducts")
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => console.log("error while getting products", err));
    }
    getProducts();
  }, []);

  const showProducts = () => {
    return products.map((product) => {
      return <Product key={product._id} product={product} />;
    });
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
