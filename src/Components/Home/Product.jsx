import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/reducers/cartSlice";

function Product(props) {
  const { product } = props;
  const navigate = useNavigate();
  const carts = useSelector((state) => state.cartReducer.items);

  const dispatch = useDispatch();

  const checkInCart = () => {
    let found = false;
    carts.map((item) => {
      if (item._id === product._id) {
        found = true;
      }
    });
    return found;
  };

  const handleClick = (e, id) => {
    if (e.target.name !== "addtocart") {
      navigate(`/product/${id}`);
    }
  };

  const handleCartBtn = (e) => {
    console.log(e.currentTarget.innerText);
    const innerText = e.currentTarget.innerText;
    if (innerText === "Add to cart") {
      dispatch(addToCart(product));
    } else {
      dispatch(removeFromCart(product._id));
    }
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
          name="addtocart"
          className={checkInCart() ? "btn btn-danger" : "btn btn-primary"}
          onClick={(e) => handleCartBtn(e, product)}
        >
          {checkInCart() ? "Remove from cart" : "Add to cart"}
        </button>
      </div>
    </div>
  );
}

export default Product;
