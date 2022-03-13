import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Search from "./Search";

function Navbarr() {
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

  const handleMenuClick = (e) => {
    const sideMenu = document.getElementById("side-menu");
    const style = window.getComputedStyle(sideMenu);
    if (style.display === "none") {
      sideMenu.style.display = "block";
    } else {
      sideMenu.style.display = "none";
    }
  };
  return (
    <nav>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <Link to="/home">
            <div className="navbar-brand">
              <img src="./images/Logo.png" alt="company logo " />
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleMenuClick}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="nav-content">
              <div className="row mb-2 w-100">
                <ul className="navbar-nav text-white text-nowrap d-flex justify-content-end  w-100">
                  <li className="nav-item pr-4 ">My Account</li>
                  <li className="nav-item pr-4">Whistlist</li>
                  <li className="nav-item pr-4">My Cart</li>
                  <li className="nav-item pr-4">Checklist</li>
                  <Link to="/login">
                    <li className="nav-item pr-4">Login</li>
                  </Link>
                </ul>
              </div>
              <div className="row w-100">
                <div className="col-10  d-flex flex-nowrap search-container">
                  <Search />
                </div>

                <div className="col-2">
                  <div className="row">
                    <div className="col-6 align-items-center">
                      <Link to="/cart">
                        <img
                          className="cart-image"
                          src="./images/Cart1.png"
                          alt="cart "
                        />
                        <div className="cart-number text-white">
                          {cartItems.length}
                        </div>
                      </Link>
                    </div>
                    <div className="col-6 m-0 pl-4">
                      <div className="row d-flex justify-content-center text-white">
                        Total
                      </div>
                      <div className="row d-flex justify-content-center text-warning ">
                        {totalPrice}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div id="side-menu">
        <ul>
          <li>My Account</li>
          <li>Whistlist</li>
          <li>My Cart</li>
          <li>Checklist</li>
          <li>Login</li>
          <li className="row w-100 d-flex flex-nowrap">
            <Search />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbarr;
