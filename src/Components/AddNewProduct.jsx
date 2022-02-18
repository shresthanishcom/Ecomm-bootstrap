import React, { useState } from "react";
import axios from "axios";

function AddNewProduct() {
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/product/addnew", state)
      .then((res) => console.log(res))
      .catch((err) => console.log("erro while posting new product", err));
  };

  const [state, setState] = useState({
    name: "",
    price: "",
    description: "",
    type: "",
    image: "",
  });

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setState((state) => ({ ...state, name: e.target.value }));
        break;
      case "price":
        setState((state) => ({ ...state, price: e.target.value }));
        break;
      case "description":
        setState((state) => ({ ...state, description: e.target.value }));
        break;
      case "type":
        setState((state) => ({ ...state, type: e.target.value }));
        break;
      case "image":
        setState((state) => ({ ...state, image: e.target.value }));
        break;
      default:
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>product add</h1>
        Name:
        <input
          name="name"
          onChange={handleChange}
          value={state.name}
          type="text"
        />
        Price:
        <input
          name="price"
          onChange={handleChange}
          value={state.price}
          type="number"
        />
        Description:
        <input
          name="description"
          onChange={handleChange}
          value={state.description}
          type="text"
        />
        Type:
        <input
          name="type"
          onChange={handleChange}
          value={state.type}
          type="text"
        />
        image:
        <input
          name="image"
          onChange={handleChange}
          value={state.image}
          type="text"
        />
        <button className="btn btn-warning" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddNewProduct;
