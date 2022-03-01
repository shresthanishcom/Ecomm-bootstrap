import React from "react";

function Cart() {
  return (
    <div>
      <div className="h1">Item Added to your Cart</div>
      <div className="row">
        <div className="col-8 cart-products">
          <div className="row">
            <div className="col-3 product-image">
              <img src="/images/laptop.png" alt="laptop image" />
            </div>
            <div className="col-9 product-title ">
              <div className="display-5">
                Hauppauge my Smarthome control starter kit
              </div>
              <div className="display-5 product-price">$500000</div>
              <div className="btn btn-primary">Buy now</div>
            </div>
          </div>
        </div>
        <div className="col-4 shipping-info"></div>
      </div>
    </div>
  );
}

export default Cart;
