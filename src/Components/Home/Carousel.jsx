import React from "react";
import "../sass/Scss-Sections/_carousel.scss";

function Carousel() {
  return (
    <div className="carousel">
      <img src="./images/laptop.png" alt="first slide" />
      <img src="./images/bag.png" alt="second slide" />
      <img src="./images/girl.png" alt="third slide" />
    </div>
  );
}

export default Carousel;
