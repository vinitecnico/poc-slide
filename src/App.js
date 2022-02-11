import React, { useState } from "react";
import ImageSlider from "./components/imageSlider";
import "./App.css";

const App = () => {
  // const [query, setQuery] = useState(""); // declaring state variable "query" and "setQuery" method to update query state

  const _images = [
    {
      id: 1,
      active: true,
      alt: "image 1",
      imageUrl:
        "https://pixabay.com/get/g85e1dd52ee60bb6632e22e41a0687435fa1aa1b37ee46c4527c7f473847e50dfa88e14b6b6c2960a79ee8b85054f3ec8_640.jpg",
    },
    {
      id: 2,
      active: false,
      alt: "image 2",
      imageUrl:
        "https://pixabay.com/get/gfb3e111aa9c4c8dd38e50260207350786f56d4dc47424986e8115e34e3fcb112bff9b639a8d75812b1981134da86a1b4_640.jpg",
    },
    {
      id: 3,
      active: false,
      alt: "image 3",
      imageUrl:
        "https://pixabay.com/get/g139d472c2cc4a6923a3e4fc252f346094d759bf293451873c306760e749875b5bd4a33e5b4501ed070001b1d7e38e177_640.jpg",
    },
  ];

  const [images, setImages] = useState(_images);
  const handleChangeImages = (position) => {
    const lastIndex = images.findIndex(({ active }) => active);
    const result = images.map((item, index) => {
      return {
        ...item,
        active: index === (position > 0 ? lastIndex + 1 : lastIndex - 1),
      };
    });

    setImages(result);
  };

  const handleSelectSlide = (id) => {
    const result = images.map((item) => {
      return {
        ...item,
        active: item.id === id,
      };
    });
    setImages(result);
  }

  return (
    <div className="App">
      <ImageSlider images={images} handleChangeImages={handleChangeImages} />
      <div className="dot-body">
        {images?.map(({id}) => (
          <span key={id} class="dot" onClick={() => handleSelectSlide(id)}></span>
        ))}
      </div>
    </div>
  );
};

export default App;
