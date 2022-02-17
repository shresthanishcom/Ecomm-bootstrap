import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Product from "./Product";

function SpecificProduct(props) {
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
        <Product />
      </div>
    </div>
  );
}

export default SpecificProduct;
