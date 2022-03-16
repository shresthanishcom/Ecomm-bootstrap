import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Product(props) {
  const { product } = props;
  const navigate = useNavigate();

  const handleBtn = (e, id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div
      className="col-12 col-sm-6 col-md-4 col-lg-4 p-1 mb-2 "
      onClick={(e) => handleBtn(e, product.id)}
    >
      <div className="card h-100">
        <img
          className="card-img-top mt-2"
          src={`${product.image}`}
          alt={product.title}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <h5 className="card-price">{product.price}</h5>
          <div className="card-rating mb-5">{product.rating.rate}</div>
          <button
            className="btn btn-primary mb-3"
            onClick={(e) => handleBtn(e, product.id)}
          >
            View item
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
