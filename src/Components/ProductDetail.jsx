import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    async function getProductDetail() {
      await axios
        .get(`http://localhost:5000/product/${id}`)
        .then((res) => {
          setProduct(res.data);
        })
        .catch((err) =>
          console.log("error while fetching particular product", err)
        );
    }
    getProductDetail();
  }, []);
  return (
    <div>
      <div className="product-detail">
        <div className="container">
          <div className="">
            <img
              src={`/images/${product.image}`}
              alt="product image"
              className="mx-auto d-block"
            />
          </div>
          <div className="product-detail">
            <div className=" display-2 ">{product.name}</div>
            <div title="Price in Nepal" className="h2 display-5">
              Rs.{product.price}
            </div>
            <span>{product.type}</span>
            <div className="lead border border-2">{product.description}</div>
          </div>
          <button className="btn btn-primary m-3">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
