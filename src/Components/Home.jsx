import React from "react";
import Sidebar from "./Home/Sidebar";
import AllProducts from "./Home/AllProducts";
import Carousel from "./Home/Carousel";
import SpecificProduct from "./Home/SpecificProduct";

export default function Home() {
  return (
    <React.Fragment>
      <div className="product-page ">
        <div className="container">
          <div className="row ">
            <div className="col-3">
              <Sidebar />
            </div>
            <div className="col-9 main-content">
              <div className="content">
                <Carousel />
              </div>
              <div className="content">
                <AllProducts />
              </div>
              <div className="content">
                <SpecificProduct title="New Products" />
              </div>
              <div className="content">
                <SpecificProduct title="Hot deals" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
