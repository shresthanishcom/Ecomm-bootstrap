import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

export default function Navbar() {
  return (
    <div>
      <div className="navbar navbar-expand-sm navbar-light bg-dark ">
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
                <div className="row ml-auto d-none d-lg-block">
                  <ul className="navbar-nav d-flex justify-content-around ">
                    <li className="nav-link text-light">My Account</li>
                    <li className="nav-link text-light">Whishlist</li>
                    <Link to="/addnew">
                      <li className="nav-link text-light">Add new</li>
                    </Link>

                    <li className="nav-link text-light">My Cart</li>
                    <li className="nav-link text-light">Checkout</li>
                    <li className="nav-link text-light">Login</li>
                  </ul>
                </div>
                <div className="row">
                  <Search />
                </div>
              </div>
              <div className="col-3 text-light d-none d-md-block">
                <div className="row m-0 ">
                  <div className="col-3 cart-image">
                    <img src="./images/Cart1.png" alt="This is cart " />
                  </div>
                  <div className="col-9 ">
                    <div className="row">Total</div>
                    <div className="row ">$1000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row gx-0 w-100 bg-danger ">
        <div className="container">
          <ul className="  d-flex p-1 m-0 flex justify-content-around  ">
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
