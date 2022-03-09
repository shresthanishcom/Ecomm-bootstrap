import React, { useState, useEffect } from "react";
import "../sass/Scss-Sections/_carousel.scss";

function Carousel() {
  const [state, setState] = useState({ currentSlide: 0, allItems: [] });
  useEffect(() => {
    const allItems = document.querySelectorAll(".manual-carousel-item");
    console.log("all items in useEffect", allItems);
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

  const changeCarouselImage = (id) => {
    const allItems = state.allItems;
    console.log("alll items are ", allItems);
    for (let i = 0; i < allItems.length; i++) {
      allItems[i].classList.remove("active");
    }

    allItems[id].classList.add("active");
  };
  const handleCarouselBtnClick = (e) => {
    changeCarouselImage(e.target.id);
  };
  const handleClick = (e) => {
    let currentSlide = state.currentSlide;
    if (e.target.name === "left") {
      // if (currentSlide <= 0) {
      //   currentSlide = state.allItems.length;
      // }
      currentSlide -= 1;
      changeCarouselImage(currentSlide);
      setState({ ...state, currentSlide });
    } else if (e.target.name === "right") {
      // if (currentSlide >= state.allItems.length) {
      //   currentSlide = state.allItems.length;
      // }
      changeCarouselImage(currentSlide);
      setState({ ...state, currentSlide: state.currentSlide + 1 });
    }
  };

  return (
    <div className="carousel-container">
      {console.log(state)}
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
