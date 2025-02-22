import React from "react";
import "./newsletter.css";
import maleTourist from "../images/male-tourist.png";

const NewsLetter = () => {
  return (
    <div className="news">
      <div className="leftnews">
        <h2>Subscribe now to get userful traveling information</h2>
        <div className="newsearch">
          <input type="text" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          fugit non voluptatem sit .
        </p>
      </div>
      <div className="rightnews">
        <img src={maleTourist} height={"80%"} alt="" />
      </div>
    </div>
  );
};

export default NewsLetter;
