import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import Card from "./facilities/card";
const Carousel = () => {
  return (
    <OwlCarousel className="owl-theme" items="3" autoplay nav dots loop>
      <div className="item">
        <Card
          link="https://via.placeholder.com/280x280"
          title="Annette Hawkins"
          text="Art Director of Gillette"
        />
      </div>
      <div className="item">
        <Card
          link="https://via.placeholder.com/280x280"
          title="Annette Hawkins"
          text="Art Director of Gillette"
        />
      </div>
      <div className="item">
        <Card
          link="https://via.placeholder.com/280x280"
          title="Annette Hawkins"
          text="Art Director of Gillette"
        />
      </div>
      <div className="item">
        <Card
          link="https://via.placeholder.com/280x280"
          title="Annette Hawkins"
          text="Art Director of Gillette"
        />
      </div>
      <div className="item">
        <Card
          link="https://via.placeholder.com/280x280"
          title="Annette Hawkins"
          text="Art Director of Gillette"
        />
      </div>
    </OwlCarousel>
  );
};

export default Carousel;
