import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/reducers/cartSlice";

function AllProducts() {
  const dispatch = useDispatch();
  useEffect(() => {
    function getProducts() {
      dispatch(fetchProducts());
    }
    getProducts();
  });
  const products = useSelector((state) => state.cartReducer.items);
  const showProducts = () => {
    return products.map((product) => {
      return <Product key={product.id} product={product} />;
    });
  };
  return (
    <div className="container">
      <h1>All products are</h1>
      <div className="row w-100 ">{showProducts()}</div>
    </div>
  );
}

export default AllProducts;
