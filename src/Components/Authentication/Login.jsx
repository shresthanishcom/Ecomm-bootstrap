import React, { useState } from "react";
import "../Css/index.css";

function Login() {
  const [state, setState] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    switch (e.target.name) {
      case "email": {
        setState({ ...state, email: e.target.value });
        break;
      }
      case "password": {
        setState({
          ...state,
          password: e.target.value,
        });
        break;
      }
      default: {
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row ">
          <div className=" ">
            Email:
            <input
              name="email"
              type="text"
              value={state.email}
              onChange={handleChange}
            />
            Password:
            <input
              name="password"
              type="password"
              value={state.password}
              onChange={handleChange}
            />
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
