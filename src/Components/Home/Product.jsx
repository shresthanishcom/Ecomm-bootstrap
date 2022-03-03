import React from "react";
import { useNavigate } from "react-router-dom";

function Product(props) {
  const { product } = props;
  const navigate = useNavigate();

  const handleBtn = (e, id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div
      className="card"
      style={{ width: "13rem" }}
      onClick={(e) => handleBtn(e, product.id)}
    >
      <img
        className="card-img-top"
        src={`${product.image}`}
        alt={product.title}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <h5>{product.price}</h5>
        <h4>{product.rating.rate}</h4>
        <p className="card-text">{product.description.slice(0, 70)}...</p>
        <button
          className="btn btn-primary"
          onClick={(e) => handleBtn(e, product.id)}
        >
          View item
        </button>
      </div>
    </div>
  );
}

export default Product;
