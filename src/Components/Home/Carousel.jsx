import React, { useState, useEffect } from "react";
import "../sass/Scss-Sections/_carousel.scss";

function Carousel() {
  const [state, setState] = useState({ currentSlide: 0 });
  useEffect(() => {
    console.log("use Effect running");
    const allItems = document.querySelectorAll(".manual-carousel-item");
    console.log("allitems", allItems);
    const automaticButton = document.getElementById("automatic-button");
    for (let i = 0; i < allItems.length; i++) {
      let newList = document.createElement("li");
      newList.id = i;
      newList.addEventListener("click", handleCarouselBtnClick);
      newList.appendChild(document.createTextNode(""));
      automaticButton.appendChild(newList);
    }
  }, []);
  const handleCarouselBtnClick = (e) => {
    const allItems = document.querySelectorAll(".manual-carousel-item");
    const id = e.target.id;
    for (let i = 0; i < allItems.length; i++) {
      allItems[i].classList.remove("active");
    }

    allItems[id].classList.add("active");
  };
  const handleClick = (e) => {
    if (e.target.name === "left") {
      setState({ ...state, currentSlide: state.currentSlide - 1 });
    } else if (e.target.name === "right") {
      setState({ ...state, currentSlide: state.currentSlide + 1 });
    }
  };

  return (
    <div className="carousel-container">
      <div name="left" className="left" onClick={handleClick}>
        {"<--"}
      </div>
      <div name="right" className="right" onClick={handleClick}>
        {"-->"}
      </div>
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
