import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  fetchProductById,
} from "../redux/reducers/cartSlice";

import "./Css/product.css";

function ProductDetail() {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cartReducer.cartItems);
  let visitedProducts;
  visitedProducts = useSelector((state) => state.cartReducer.visitedItems);
  const { id } = useParams();
  let product = {};
  useEffect(() => {
    let alreadyExists = false;
    visitedProducts.map((item) => {
      if (item.id === parseInt(id)) {
        alreadyExists = true;
      }
    });
    async function getProduct() {
      await dispatch(fetchProductById(id));
    }
    if (!alreadyExists) {
      getProduct();
    }
  }, []);
  console.log("rndering");
  visitedProducts.map((item) => {
    if (item.id === parseInt(id)) product = item;
  });

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
            {/* <div>{!product.rating.rate ?? product.rating.rate} star</div> */}
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
