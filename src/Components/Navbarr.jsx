import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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
  return (
    <nav>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
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
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                  <input
                    className="search-box"
                    type="text"
                    placeholder="Search"
                  />
                  <button
                    type="button"
                    className="btn btn-danger search-button"
                  >
                    Search
                  </button>
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
    </nav>
  );
}

export default Navbarr;

{
  /* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */
}
