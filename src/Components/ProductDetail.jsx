import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  addToVisitedItems,
} from "../redux/reducers/cartSlice";

function ProductDetail() {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cartReducer.cartItems);

  const [product, setProduct] = useState({ quantity: 1, price: 0 });
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState({ quantity: 1, costPrice: product.price });

  let visitedProducts;
  visitedProducts = useSelector((state) => state.cartReducer.visitedItems);
  const { id } = useParams();

  useEffect(() => {
    let alreadyExists = false;

    visitedProducts.forEach((item) => {
      if (item.id === parseInt(id)) {
        setProduct(item);
        setState({ ...state, costPrice: item.price });
        alreadyExists = true;
        setLoading(false);
      }
    });

    async function getProduct() {
      let data = await fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .catch((err) => {
          console.log("error while fetching data", err);
          return {};
        });
      setProduct(data);
      dispatch(addToVisitedItems(data));
      setState({ ...state, costPrice: data.price });
      setLoading(false);
    }
    if (!alreadyExists) {
      getProduct();
    }
  }, [id, dispatch, visitedProducts, state]);

  const checkInCart = () => {
    let found = false;
    carts.forEach((item) => {
      if (item.id === product.id) {
        found = true;
      }
    });

    return found;
  };

  const handleQuantity = (e) => {
    let price = product.price * e.target.value;
    setState({ ...state, quantity: e.target.value, costPrice: price });
  };

  return (
    <>
      {loading && (
        <div className="lds-circle">
          <div></div>
        </div>
      )}
      {!loading && (
        <div className="container-fluid m-2">
          <div className="row">
            <div className="col-12 col-sm-5 p-5 product-images">
              <div className="row w-100">
                <img
                  src={`${product.image}`}
                  alt={product.title}
                  className="mx-auto d-block"
                />
              </div>
              <div className="row w-100"></div>
            </div>
            <div className="col-12 col-sm-7 product-details">
              <h1 className="product-title ">{product.title}</h1>
              <div className="product-rating">
                {product.rating?.rate && product.rating.rate} star
              </div>
              <div className=" d-flex align-items-center  price-detail">
                <del className="">Rs 100</del>
                <h3 className=" m-0 product-price" title="Price in Nepal">
                  Rs.{product?.price && product.price}
                </h3>
                <div className=" discount-tag">70%Off</div>
              </div>
              {!checkInCart() ? (
                <>
                  <div className="m-3 product-quantity">
                    Quantity:
                    <select value={state.quantity} onChange={handleQuantity}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="lead border border-2  p-3 product-description">
                    {product.description}
                  </div>
                  <button
                    className="btn btn-primary m-3"
                    onClick={() =>
                      dispatch(
                        addToCart({
                          ...product,
                          quantity: state.quantity,
                        })
                      )
                    }
                  >
                    Add to cart
                  </button>
                  <span
                    style={{ color: "orange", fontSize: "1.4rem" }}
                  >{` Rs.${state.costPrice}`}</span>
                </>
              ) : (
                <>
                  <div className="lead border border-2 p-3 product-description">
                    {product.description}
                  </div>

                  <button
                    className="btn btn-danger m-3"
                    onClick={() => dispatch(removeFromCart(product.id))}
                  >
                    Remove from cart
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetail;
