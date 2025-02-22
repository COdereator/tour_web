import React from "react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import galllerImages from "./galleryImage";

const MasonryImage = () => {
  return (
    <ResponsiveMasonry columnsCoundBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry gutter="1rem">
        {galllerImages.map((item, index) => (
          <img
            className="mansoryImg"
            src={item}
            key={index}
            alt=""
            style={{ width: "100%", display: "block", borderRadius: "10px" }}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryImage;
