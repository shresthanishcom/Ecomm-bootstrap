import React, { useState } from "react";

function AddNewProduct() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [state, setState] = useState({
    name: "",
    price: "",
    description: "",
    type: "",
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
      default:
    }
  };
  return (
    <div>
      {console.log(state)}
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
        <button className="btn btn-warning" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddNewProduct;
