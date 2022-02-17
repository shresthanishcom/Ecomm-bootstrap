import React from "react";
import Sidebar from "./Home/Sidebar";
import AllProducts from "./Home/AllProducts";

export default function Home() {
  return (
    <React.Fragment>
      <div className="product-page ">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Sidebar />
            </div>
            <div className="col-9"></div>
          </div>
          <AllProducts />
        </div>
      </div>
    </React.Fragment>
  );
}
