import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/reducers/cartSlice";

function AllProducts() {
  const dispatch = useDispatch();
  const arr1 = [1, 2, 3];
  const arr2 = [1, 2, 3];
  console.log(JSON.stringify(arr1) === JSON.stringify(arr2));

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const products = useSelector((state) => state.cartReducer.productItems);
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
