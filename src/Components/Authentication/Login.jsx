import React from "react";
import "../Css/index.css";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row ">
          <div className=" ">
            Email:
            <input type="text" />
            Password:
            <input type="password" />
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
