import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editCartItems } from "../redux/reducers/cartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  const carts = useSelector((state) => state.cartReducer.cartItems);
  const [totalPrice, setTotalPrice] = useState(0);
  const [state, setState] = useState({ quantity: 1 });
  const dispatch = useDispatch();

  const calculateTotalPrice = () => {
    let price = 0;
    carts.map((item) => {
      price += item.price * item.quantity;
    });

    setTotalPrice(price);
  };
  useEffect(() => {
    calculateTotalPrice();
  }, [carts]);

  const handleClick = (e, id) => {
    if (e.target.name !== "quantity") {
      navigate(`/product/${id}`);
    }
  };
  const handleQuantity = (e, id) => {
    setState({ ...state, quantity: parseInt(e.target.value) });
    dispatch(
      editCartItems({
        objectName: "quantity",
        value: parseInt(e.target.value),
        id,
      })
    );
  };

  const getCartProducts = () => {
    return carts.map((product) => {
      return (
        <>
          <div className="row" onClick={(e) => handleClick(e, product.id)}>
            <div className="col-3 product-image">
              <img src={product.image} alt={`${product.title} `} />
            </div>
            <div className="col-9 product-title ">
              <div className="display-5">{product.title}</div>
              <div>
                Quantity:
                <select
                  name="quantity"
                  value={product.quantity}
                  onChange={(e) => handleQuantity(e, product.id)}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="display-5 product-price">
                {product.price * product.quantity}
              </div>
            </div>
          </div>
        </>
      );
    });
  };
  return (
    <div className="container-fluid">
      <div className="h1">Item Added to your Cart</div>
      <div className="row">
        <div className="col-8 cart-products">{getCartProducts()}</div>
        <div className="col-4 shipping-info">Total:{totalPrice}</div>
      </div>
    </div>
  );
}

export default Cart;
