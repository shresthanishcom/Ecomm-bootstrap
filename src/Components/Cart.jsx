import { prettyDOM } from "@testing-library/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function Cart() {
  const carts = useSelector((state) => state.cartReducer.items);
  const [state, setState] = useState();
  const getCartProducts = () => {
    return carts.map((product) => {
      return (
        <>
          <div className="row">
            <div className="col-3 product-image">
              <img src={product.image} alt={`${product.title} image`} />
            </div>
            <div className="col-9 product-title ">
              <div className="display-5">{product.title}</div>
              <div className="display-5 product-price">{product.price}</div>
              <div className="btn btn-primary">Buy now</div>
            </div>
          </div>
        </>
      );
    });
  };
  return (
    <div>
      <div className="h1">Item Added to your Cart</div>
      <div className="row">
        <div className="col-8 cart-products">{getCartProducts()}</div>
        <div className="col-4 shipping-info"></div>
      </div>
    </div>
  );
}

export default Cart;
