import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Cart() {
  const carts = useSelector((state) => state.cartReducer.cartItems);
  const [totalPrice, setTotalPrice] = useState(0);
  let price = 0;

  const calculateTotalPrice = () => {
    let price = 0;
    carts.map((item) => {
      price += item.price;
    });

    setTotalPrice(price);
  };
  useEffect(() => {
    calculateTotalPrice();
  }, [totalPrice]);

  const handleClick = () => {
    setTotalPrice(totalPrice - 1);
  };

  const getCartProducts = () => {
    return carts.map((product) => {
      return (
        <>
          {console.log(totalPrice)}
          <div className="row">
            <div className="col-3 product-image " onClick={handleClick}>
              <img src={product.image} alt={`${product.title} `} />
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
    <div className="container-fluid">
      <div className="h1">Item Added to your Cart</div>
      <div className="row">
        <div className="col-8 cart-products">{getCartProducts()}</div>
        <div className="col-4 shipping-info">Total:{totalPrice}</div>
      </div>
    </div>
  );
}

export default Cart;
