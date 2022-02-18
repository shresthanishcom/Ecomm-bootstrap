import React from "react";

function Product(props) {
  const { product } = props;
  return (
    <div className="card" style={{ width: "13rem" }}>
      <img
        className="card-img-top"
        src={`./images/${product.image}`}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <h5>{product.price}</h5>
        <p className="card-text">{product.description}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Product;
