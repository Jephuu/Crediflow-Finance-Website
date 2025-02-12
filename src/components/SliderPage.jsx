import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderPage.css";

const SliderPage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400, // Faster transition speed (reduced from 800)
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // Faster autoplay interval (reduced from 2000)
    arrows: true,
    lazyLoad: "ondemand",
  };

  const sliderImages = [
    "/images/fam.jpg", 
    "/images/vehicle4.jpg",
    "/images/edu3.jpg",
    "/images/fam2.jpg",
  ];

  return (
    <div className="slider-page">
      <section className="home-section">
        <div className="home-background">
          <h1>Welcome to Our Website</h1>
        </div>
      </section>

      <div className="slider-container">
        <h2>Explore Our Features</h2>
        <Slider {...sliderSettings}>
          {sliderImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} className="slider-image" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderPage;
