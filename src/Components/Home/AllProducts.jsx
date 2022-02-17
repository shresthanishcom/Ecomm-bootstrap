import React from "react";
function AllProducts(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="./images/gumba.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card ti tle and make up the
          bulk of the card's content.
        </p>
        <button className="btn btn-primary">Go somewhere</button>
      </div>
    </div>
  );
}

export default AllProducts;
