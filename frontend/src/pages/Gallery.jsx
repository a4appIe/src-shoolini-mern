import React, { useEffect } from "react";
import "./Gallery.css";

const Gallery = () => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
    useEffect(() => {
      scrollToTop();
    }, []);
  return (
    // <!-- Photo Grid -->
    <div className="row w-[80%] mx-auto m-2">
      <div className="column"> 
        <img src="https://www.w3schools.com/w3images/wedding.jpg"/>
        <img src="https://www.w3schools.com/w3images/rocks.jpg" />
        <img src="https://www.w3schools.com/w3images/falls2.jpg" />
        <img src="https://www.w3schools.com/w3images/paris.jpg" />
        <img src="https://www.w3schools.com/w3images/nature.jpg" />
        <img src="https://www.w3schools.com/w3images/mist.jpg" />
        <img src="https://www.w3schools.com/w3images/paris.jpg" />
      </div>

      <div className="column">
        <img src="https://www.w3schools.com/w3images/underwater.jpg" />
        <img src="https://www.w3schools.com/w3images/ocean.jpg" />
        <img src="https://www.w3schools.com/w3images/wedding.jpg" />
        <img src="https://www.w3schools.com/w3images/mountainskies.jpg" />
        <img src="https://www.w3schools.com/w3images/rocks.jpg" />
        <img src="https://www.w3schools.com/w3images/underwater.jpg" />
      </div>

      <div className="column">
        <img src="https://www.w3schools.com/w3images/wedding.jpg" />
        <img src="https://www.w3schools.com/w3images/rocks.jpg" />
        <img src="https://www.w3schools.com/w3images/falls2.jpg" />
        <img src="https://www.w3schools.com/w3images/paris.jpg"/>
        <img src="https://www.w3schools.com/w3images/nature.jpg" />
        <img src="https://www.w3schools.com/w3images/mist.jpg" />
        <img src="https://www.w3schools.com/w3images/paris.jpg" />
      </div>

      <div className="column">
        <img src="https://www.w3schools.com/w3images/underwater.jpg" />
        <img src="https://www.w3schools.com/w3images/ocean.jpg" />
        <img src="https://www.w3schools.com/w3images/wedding.jpg" />
        <img src="https://www.w3schools.com/w3images/mountainskies.jpg" />
        <img src="https://www.w3schools.com/w3images/rocks.jpg" />
        <img src="https://www.w3schools.com/w3images/underwater.jpg" />
      </div>
    </div>
  );
};

export default Gallery;
