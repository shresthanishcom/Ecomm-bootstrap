import React, { useState, useEffect } from "react";
import "../sass/Scss-Sections/_carousel.scss";

function Carousel() {
  const [state, setState] = useState({ currentSlide: 0 });
  let allItems = document.querySelectorAll("manual-carousel-item");

  useEffect(() => {
    const automaticButton = document.getElementById("automatic-button");
    for (let i = 0; i < allItems.length; i++) {
      let newList = document.createElement("li");
      newList.appendChild(document.createTextNode(i));
      newList.id = i;
      newList.addEventListener("click", handleCarouselBtnClick);
      automaticButton.appendChild(newList);
    }
  }, []);

  const handleCarouselBtnClick = (e) => {
    const id = e.target.id;
    allItems.map((item, index) => {
      item.classList.remove("active");
    });
    allItems[id].classList.add("active");
  };
  return (
    <div className="carousel-container">
      <div className="manual-carousel-item active">
        <img src="./images/girl.png" alt="third slide" />
      </div>
      <div className="manual-carousel-item">
        <img src="./images/bag.png" alt="second slide" />
      </div>
      <div className="manual-carousel-item">
        <img src="./images/laptop.png" alt="first slide" />
      </div>
      <div className="carousel-button">
        <ol id="automatic-button"></ol>
      </div>
    </div>
  );
}

export default Carousel;
