import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const [totalPrice, setTotalPrice] = useState(0);
  const calculateTotalPrice = () => {
    let price = 0;
    cartItems.map((item) => {
      price += item.price * item.quantity;
    });
    setTotalPrice(price);
  };
  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  return (
    <>
      <div className="navbar bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-4 p-0 d-flex align-items-center justify-content-center">
              <Link to="/home">
                <div className="navbar-brand">
                  <img src="./images/Logo.png" alt="company logo " />
                </div>
              </Link>
            </div>
            <div className="col-8 d-flex align-items-center ">
              <div className="row">
                <div className="col-12 ">
                  <div className="row pr-2 d-none d-lg-block">
                    <ul className=" d-flex justify-content-around nav-items">
                      <li className="nav-link text-light">My Account</li>
                      <li className="nav-link text-light">Whishlist</li>
                      <Link to="/addnew">
                        <li className="nav-link text-light">Add new</li>
                      </Link>

                      <li className="nav-link text-light">My Cart</li>
                      <li className="nav-link text-light">Checkout</li>
                      <Link to="/login">
                        <li className="nav-link text-light">Login</li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row search-row">
                    <Search />
                  </div>
                </div>
                <div className="col-2  text-light d-none d-md-block">
                  <div className="row d-flex align-items-center">
                    <div className="col-6 col-sm-5 col-lg-6 cart-image">
                      <Link to="/cart">
                        <img src="./images/Cart1.png" alt="This is cart " />
                      </Link>
                      <div className="cart-number">{cartItems.length}</div>
                    </div>
                    <div className="col-6 col-sm-7 col-lg-6 d-grid justify-content-center ">
                      <div className="row d-flex justify-content-center">
                        Total
                      </div>
                      <div className="row d-flex justify-content-center">
                        {totalPrice}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-danger row sub-menu m-0  ">
        <div className="container">
          <ul className=" p-1 m-0  d-flex  justify-content-around ">
            <li className="nav-link text-light">My Account</li>
            <li className="nav-link text-light">Whishlist</li>
            <li className="nav-link text-light">My Cart</li>
            <li className="nav-link text-light">Checkout</li>
            <li className="nav-link text-light">Login</li>
          </ul>
        </div>
      </div>
    </>
  );
}
