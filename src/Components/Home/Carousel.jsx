import React, { useState, useEffect } from "react";
import "../sass/Scss-Sections/_carousel.scss";

function Carousel() {
  const [state, setState] = useState({ currentSlide: 0, allItems: [] });
  useEffect(() => {
    //the more manaual crousel item added it automatically generate buttons
    //this run after dom is rendered useffect runs after dom

    const allItems = document.querySelectorAll(".manual-carousel-item");
    setState({ ...state, allItems: allItems });
    const automaticButton = document.getElementById("automatic-button");
    for (let i = 0; i < allItems.length; i++) {
      let newList = document.createElement("li");
      newList.id = i;
      newList.addEventListener("click", handleCarouselBtnClick);
      newList.appendChild(document.createTextNode(""));
      automaticButton.appendChild(newList);
    }
  }, []);

  const getItems = () => {
    return document.querySelectorAll(".manual-carousel-item");
  };

  //for changing the carousel image
  const changeCarouselImage = (id) => {
    const allItems = getItems();
    for (let i = 0; i < allItems.length; i++) {
      allItems[i].classList.remove("active");
    }

    allItems[id].classList.add("active");
  };

  //
  const handleCarouselBtnClick = (e) => {
    changeCarouselImage(e.target.id);
    setState({ ...state, currentSlide: e.target.id });
  };

  const handleSwipeClick = (e) => {
    let currentSlide = state.currentSlide;
    const allItems = getItems();
    if (e.target.id === "left") {
      if (currentSlide <= 0) {
        currentSlide = allItems.length - 1;
      } else {
        currentSlide -= 1;
      }
      changeCarouselImage(currentSlide);
      setState({ ...state, currentSlide });
    } else if (e.target.id === "right") {
      if (currentSlide >= allItems.length - 1) {
        currentSlide = 0;
      } else {
        currentSlide = parseInt(currentSlide) + 1;
      }
      changeCarouselImage(currentSlide);
      setState({ ...state, currentSlide });
    }
  };

  return (
    <div className="carousel-container">
      <div id="left" className="left" onClick={(e) => handleSwipeClick(e)}>
        {"<--"}
      </div>
      <div id="right" className="right" onClick={(e) => handleSwipeClick(e)}>
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
