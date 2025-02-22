import React from "react";
import "../style/home.css";
import heroImg01 from "../images/hero-img01.jpg";
import heroImg02 from "../images/hero-img02.jpg";
import herovdo from "../images/hero-video.mp4";
import experienceImg from "../images/experience.png";
import worldImg from "../images/world.png";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import Masonry from "../components/Image-gallery/MasonryImage";
import Testimonials from "../components/Testimonial/Testimonials";
import NewsLetter from "../shared/NewsLetter";

const Home = () => {
  return (
    <div className="hero">
      <div className="main">
        <div className="left">
          <div className="left-content">
            <Subtitle subtitle={"Know Before Your Go"} />
            <img src={worldImg} height={45} alt="" />
          </div>
          <h1>
            Traveling open the door to creating{" "}
            <span style={{ color: "#FE9F40" }}> memories </span>{" "}
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipis icing elit. Quias
            quisquam debitis necessita tibus dolor ibus. Quaerat esse quos vol
            ptatum nesciunt, deserunt distinctio optio ipsam animi rerum.
          </p>
        </div>
        <div className="mainright">
          <div className="right-content">
            <img src={heroImg01} alt="" />
            <video
              src={herovdo}
              style={{ position: "relative", top: "25px" }}
              autoPlay
              loop
              muted
            ></video>
            <img
              src={heroImg02}
              style={{ position: "relative", top: "55px" }}
              alt=""
            />
          </div>
        </div>
      </div>
      <SearchBar />
      <div className="section">
        <div className="section1">
          <h5>What we serve</h5>
          <h2>We offer our best services</h2>
        </div>
        <ServiceList />
      </div>
      <div class="section" style={{ display: "block" }}>
        <Subtitle subtitle="Explore" />
        <h2
          style={{ fontSize: "1.8rem", fontWeight: "500", margin: "5px 0px" }}
        >
          Our Featured Tours
        </h2>
        <div className="grid-contianer">
          <FeaturedTourList />
        </div>
      </div>
      <div className="section">
        <div className="section_left">
          <Subtitle subtitle="Experience" />
          <h2>With our all experience we will serve you</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            corrupti molestiae neque, est dolor error ab nesciunt
          </p>
          <div className="ratings">
            <div className="rate1">
              <button>12k+</button>
              <h4>Successful Trip</h4>
            </div>
            <div className="rate1">
              <button>12k+</button>
              <h4>Regular Clients</h4>
            </div>
            <div className="rate1">
              <button>15</button>
              <h4>Year experience</h4>
            </div>
          </div>
        </div>
        <div className="section_right">
          <img src={experienceImg} width="90%" alt="" />
        </div>
      </div>
      <div className="section" style={{ display: "block" }}>
        <Subtitle subtitle={"Gallery"} />
        <h2
          style={{ margin: "20px 0px", fontSize: "2.2rem", fontWeight: "500" }}
        >
          Visit our Customer tour gallery
        </h2>
        <Masonry />
      </div>
      <div className="section" style={{ display: "block" }}>
        <Subtitle subtitle={"Fans Love"} />
        <h2
          style={{ margin: "20px 0px", fontSize: "2.2rem", fontWeight: "500" }}
        >
          What our fan say about us
        </h2>
        <div className="testimonals">
          <Testimonials />
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default Home;
