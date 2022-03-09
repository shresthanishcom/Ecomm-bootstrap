import React, { useState, useEffect } from "react";
import Product from "./Product";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/reducers/cartSlice";

function AllProducts() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState("true");
  useEffect(() => {
    async function getProducts() {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      console.log("products in all products from server: ", data);
      setLoading(false);
      setProducts(data);
    }
    getProducts();
    // dispatch(fetchProducts());
  }, []);

  // const products = useSelector((state) => state.cartReducer.productItems);
  const showProducts = () => {
    return products.map((product) => {
      return <Product key={product.id} product={product} />;
    });
  };
  return (
    <>
      <h1>All products:</h1>
      {loading && (
        <div className="lds-circle">
          <div></div>
        </div>
      )}
      {!loading && (
        <div className="container">
          <div className="row w-100 ">{showProducts()}</div>
        </div>
      )}
    </>
  );
}

export default AllProducts;
