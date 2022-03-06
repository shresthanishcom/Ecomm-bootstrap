import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  addToVisitedItems,
} from "../redux/reducers/cartSlice";

import "./Css/product.css";

function ProductDetail() {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cartReducer.cartItems);
  let product = {};

  const [loading, setLoading] = useState(true);
  const [iteration, setIteration] = useState(1);
  const [state, setState] = useState({ quantity: 1, costPrice: product.price });

  let visitedProducts;
  visitedProducts = useSelector((state) => state.cartReducer.visitedItems);
  const { id } = useParams();
  visitedProducts.map((item) => {
    if (item.id === parseInt(id)) product = item;
  });
  useEffect(() => {
    let alreadyExists = false;

    visitedProducts.map((item) => {
      if (item.id === parseInt(id)) {
        alreadyExists = true;
        setLoading(false);
      }
    });

    async function getProduct() {
      const data = await fetch(`https://fakestoreapi.com/products/${id}`);
      const result = await data.json();
      console.log(result);

      setLoading(false);
    }
    if (!alreadyExists) {
      getProduct();
    }
  }, []);

  const checkInCart = () => {
    let found = false;
    carts.forEach((item) => {
      if (item.id === product.id) {
        found = true;
      }
    });

    return found;
  };

  const handleQuantity = (e) => {
    let price = product.price * e.target.value;
    setState({ ...state, quantity: e.target.value, costPrice: price });
  };

  return (
    <div>
      {loading && (
        <div className="lds-circle">
          <div></div>
        </div>
      )}
      {!loading && (
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
              <div>{product.rating?.rate && product.rating.rate} star</div>
              <div>
                Quantity:
                <select value={state.quantity} onChange={handleQuantity}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="lead border border-2">{product.description}</div>
            </div>
            {!checkInCart() ? (
              <>
                <button
                  className="btn btn-primary m-3"
                  onClick={() =>
                    dispatch(addToCart({ ...product, price: state.costPrice }))
                  }
                >
                  Add to cart
                </button>
                <span style={{ color: "orange", fontSize: "1.4rem" }}></span>
                {` Rs.${state.costPrice}`}
              </>
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
      )}
    </div>
  );
}

export default ProductDetail;
