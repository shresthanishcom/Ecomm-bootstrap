import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/reducers/cartSlice";

function Product(props) {
  const { product } = props;
  const navigate = useNavigate();
  // const carts = useSelector((state) => state.cartReducer.items);

  // const dispatch = useDispatch();

  // const checkInCart = () => {
  //   let found = false;
  //   carts.map((item) => {
  //     if (item._id === product.id) {
  //       found = true;
  //     }
  //   });
  //   return found;
  // };

  const handleClick = (e, id) => {
    if (e.target.name !== "addtocart") {
      navigate(`/product/${id}`);
    }
  };

  // const handleCartBtn = (e) => {
  //   console.log(e.currentTarget.innerText);
  //   const innerText = e.currentTarget.innerText;
  //   if (innerText === "Add to cart") {
  //     dispatch(addToCart(product));
  //   } else {
  //     dispatch(removeFromCart(product._id));
  //   }
  // };
  const handleBtn = (e, id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div
      className="card"
      style={{ width: "13rem" }}
      // onClick={(e) => handleClick(e, product._id)}
    >
      <img
        className="card-img-top"
        src={`${product.image}`}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <h5>{product.price}</h5>
        <h4>{product.rating.rate}</h4>
        <p className="card-text">{product.description.slice(0, 70)}...</p>
        <button
          className="btn btn-primary"
          // onClick={(e) => handleBtn(e, product._id)}
        >
          View item
        </button>
      </div>
    </div>
  );
}

export default Product;
