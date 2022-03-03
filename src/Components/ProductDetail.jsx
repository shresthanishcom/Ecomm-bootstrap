import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  fetchProductById,
} from "../redux/reducers/cartSlice";

import "./Css/product.css";

function ProductDetail() {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cartReducer.items);

  const { id } = useParams();
  let product = { rating: {} };
  useEffect(() => {
    dispatch(fetchProductById(id));
  });
  product = useSelector((state) => state.cartReducer.visitedItems);
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
              alt={product.title}
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
