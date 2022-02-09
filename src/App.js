import React, { useState } from "react";
import ImageSlider from "./components/imageSlider";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState(""); // declaring state variable "query" and "setQuery" method to update query state

  const [images, setImages] = useState([]); // declare state variable "images" to an empty array and "setImages" method to update images state

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://pixabay.com/api/?key=6157966-0255d6fd328f89519fe0b8438&q=${query}`
    )  // fetch to API by passing in query state
      .then((response) => response.json())
      .then(({ hits }) => hits.map(({ webformatURL }) => webformatURL)) // use object destructuring to grab image urls from json response
      .then(setImages); // call setImages to update images state with image urls
  };

  return (
    <div className="App">
      <h1>Image Slider</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <input type="submit" value="Search" />
      </form>

      <ImageSlider images={images} />
    </div>
  );
};

export default App;
