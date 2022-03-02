import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/reducers/cartSlice";

import "./Css/product.css";

function ProductDetail() {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cartReducer.items);

  const { id } = useParams();
  const [product, setProduct] = useState({ rating: {} });
  useEffect(() => {
    async function getProductDetail() {
      await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
          console.log(res.data);
          setProduct(res.data);
        })
        .catch((err) =>
          console.log("error while fetching particular product", err)
        );
    }
    getProductDetail();
  }, []);

  const handleCartBtn = (e) => {
    console.log(e.currentTarget.innerText);
    const innerText = e.currentTarget.innerText;
    if (innerText === "Add to cart") {
      dispatch(addToCart(product));
    } else {
      dispatch(removeFromCart(product.id));
    }
  };
  const checkInCart = () => {
    let found = false;
    carts.forEach((item) => {
      if (item.id === product.id) {
        found = true;
      }
    });
    return found;
  };

  return (
    <div>
      <div className="product-detail">
        <div className="container">
          <div className="product-img">
            <img
              src={`${product.image}`}
              alt="product image"
              className="mx-auto d-block"
            />
          </div>
          <div className="product-detail">
            <div className=" display-2 ">{product.title}</div>
            <div title="Price in Nepal" className="h2 display-5">
              Rs.{product.price}
            </div>
            <span>{product.category}</span>
            <div>{product.rating.rate} star</div>
            <div className="lead border border-2">{product.description}</div>
          </div>
          {!checkInCart() ? (
            <button
              className="btn btn-primary m-3"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to cart
            </button>
          ) : (
            <button
              className="btn btn-danger m-3"
              onClick={() => dispatch(removeFromCart(product.id))}
            >
              Remove from cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
