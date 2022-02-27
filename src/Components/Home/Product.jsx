import React from "react";

function Product(props) {
  const { product } = props;

  const handleClick = (e, id) => {
    const obj = { name: "anish", age: 21 };
    console.log(obj);
  };

  const addToCart = (e, id) => {
    console.log("add to cart clicked", e.currentTarget.style.backgroundColor);
  };
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
