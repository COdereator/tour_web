import React from "react";
import Slider from "react-slick";

import ava01 from "../../images/ava-1.jpg";
import ava02 from "../../images/ava-2.jpg";
import ava03 from "../../images/ava-3.jpg";

// Import Slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials">
      <Slider {...settings}>
        <div className="testcard_01">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
            pariatur fugit, volupt atibus consequatur quia dolore odio ab porro
            eos officia impedit quibusdam qu sint sorre astha.
          </p>
          <div className="card-content">
            <img src={ava01} height={60} alt="" />
            <div>
              <h4>John Doe</h4>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="testcard_01">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
            pariatur fugit, volupt atibus consequatur quia dolore odio ab porro
            eos officia impedit quibusdam qu sint sorre astha.
          </p>
          <div className="card-content">
            <img src={ava02} height={60} alt="" />
            <div>
              <h4>Lia Franklin</h4>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="testcard_01">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
            pariatur fugit, volupt atibus consequatur quia dolore odio ab porro
            eos officia impedit quibusdam qu sint sorre astha.
          </p>
          <div className="card-content">
            <img src={ava03} height={60} alt="" />
            <div>
              <h4>Jake Parker</h4>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="testcard_01">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
            pariatur fugit, volupt atibus consequatur quia dolore odio ab porro
            eos officia impedit quibusdam qu sint sorre astha.
          </p>
          <div className="card-content">
            <img src={ava02} height={60} alt="" />
            <div>
              <h4>John Doe</h4>
              <p>Customer</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonials;
