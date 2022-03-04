import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);

  return (
    <div>
      <div className="navbar navbar-expand-sm navbar-light bg-dark  w-100">
        <div className="container">
          <div className="row w-100 m-auto">
            <div className="col-4 p-0 d-flex align-items-center">
              <Link to="/home">
                <div className="navbar-brand">
                  <img src="./images/Logo.png" alt="company logo " />
                </div>
              </Link>
            </div>
            <div className="col-8 p-0 d-flex align-items-center">
              <div className="col-9 p-0">
                <div className="row pr-2 d-none d-lg-block">
                  <ul className="navbar-nav d-flex justify-content-around ">
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
              <div className="col-3 w-100 p-0 text-light d-none d-md-block">
                <div className="row d-flex align-items-center">
                  <div className="col-5 cart-image">
                    <Link to="/cart">
                      <img src="./images/Cart1.png" alt="This is cart " />
                    </Link>
                  </div>
                  {cartItems.length}
                  <div className="col-7 ">
                    <div className="row">Total</div>
                    <div className="row ">$1000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-danger row sub-menu m-0 ">
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
    </div>
  );
}
