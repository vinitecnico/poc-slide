import React from "react";

const ImageSlider = ({ images, handleChangeImages }) => {
  const selectedIndex = images.findIndex(({ active }) => active);

  const handlPlusSlides = (position) => {
    handleChangeImages(position);
  };

  return (
    <div className="slideshow-container">
      {images.map(({ id, imageUrl, alt, active }) => (
        <div key={id} className={`fade ${active ? "active" : "mySlides"}`}>
          <div className="numbertext">1</div>
          <img src={imageUrl} alt={alt} />
          <div className="text">{alt}</div>
        </div>
      ))}
      {selectedIndex > 0 && (
        <a className="prev" onClick={() => handlPlusSlides(-1)}>
          &#10094;
        </a>
      )}
      {selectedIndex < images.length - 1 && (
        <a className="next" onClick={() => handlPlusSlides(1)}>
          &#10095;
        </a>
      )}
    </div>
  );
};

export default ImageSlider;
