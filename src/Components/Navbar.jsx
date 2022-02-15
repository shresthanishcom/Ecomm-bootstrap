import React from "react";

export default function Navbar() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="navbar navbar-expand-lg navbar-light bg-dark ">
        <div className="container-fluid">
          <div className="row w-100">
            <div className="col-4 ">
              <div className="navbar-brand">
                <img src="./images/Logo.png" alt="company logo " />
              </div>
            </div>
            <div className="col-8    ">
              <div className="row ml-auto ">
                <ul className="navbar-nav d-flex justify-content-around">
                  <li className="nav-link text-light">My Account</li>
                  <li className="nav-link text-light">Whishlist</li>
                  <li className="nav-link text-light">My Cart</li>
                  <li className="nav-link text-light">Checkout</li>
                  <li className="nav-link text-light">Login</li>
                </ul>
              </div>
              <div className="row">
                <div className="col-9 d-flex">
                  <input
                    class="form-control "
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    class="btn btn-outline-success "
                    onClick={handleSubmit}
                    type="submit"
                  >
                    Search
                  </button>
                </div>
                <div className="col-3 text-light">
                  <img src="./images/Cart1.png" alt="This is cart image" />
                  <span>
                    Total
                    <br />
                    $1000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
