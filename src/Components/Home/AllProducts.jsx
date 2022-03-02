import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";

function AllProducts(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      await axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          const products = res.data;
          console.log("from the server products in all product", products);
          setProducts(products);
        })
        .catch((err) => console.log("error while getting products", err));
    }
    getProducts();
  }, []);

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
