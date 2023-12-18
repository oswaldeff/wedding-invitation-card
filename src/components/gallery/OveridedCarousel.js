import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./OveridedCarousel.css";

const OveridedCarousel = () => {
  const images = [];
  for (let i = 1; i < 14; i++) {
    if (i !== 2) {
      images.push(`s3 url/gallery/GALLERY/image${i}.jpeg`);
    }
  }
  return (
    <div id="carousel-div" className="carousel-div">
      <h1 id="carousel-h1" className="carousel-h1">
        GALLERY
      </h1>
      <Carousel
        className="crsl"
        showArrows={true}
        centerMode={true}
        centerSlidePercentage={100}
        showThumbs={true}
        showStatus={true}
        infiniteLoop={true}
        interval={500}
        transitionTime={500}
      >
        {images.map((image) => (
          <img src={image} />
        ))}
      </Carousel>
    </div>
  );
};

export default OveridedCarousel;
