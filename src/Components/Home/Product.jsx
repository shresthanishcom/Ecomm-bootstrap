import React from "react";
import { useNavigate, useNavigationType } from "react-router-dom";

function Product(props) {
  const { product } = props;
  const navigate = useNavigate();
  const handleClick = (e, id) => {
    navigate(`/product/${id}`);
  };

  const addToCart = (e, id) => {};
  return (
    <div
      className="card"
      style={{ width: "13rem" }}
      onClick={(e) => handleClick(e, product._id)}
    >
      <img
        className="card-img-top"
        src={`./images/${product.image}`}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <h5>{product.price}</h5>
        <p className="card-text">{product.description}</p>
        <button
          className="btn btn-primary"
          onClick={(e) => addToCart(e, product._id)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
