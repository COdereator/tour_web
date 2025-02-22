import React, { useRef, useState } from "react";
import "../style/tourdetails.css";
import { useParams } from "react-router-dom";
import tourData from "../data/tours";
import avatar from "../images/avatar.jpg";
import Booking from "../components/Booking/Booking";
const TourDetails = () => {
  const { id } = useParams();

  const reviewMesRef = useRef("");

  const [tourRating, setTourRating] = useState(null);

  const option = { day: "numeric", month: "long", year: "numeric" };

  const tour = tourData.find((tour) => tour.id === id);

  const { photo, title, desc, price, reviews, city, distance, maxGroupSize } =
    tour;

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewText = reviewMesRef.current.value;

    alert(`${reviewText} , ${tourRating}`);
  };

  const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);
  const avgRating =
    totalRating === 0
      ? ""
      : totalRating === 1
      ? totalRating
      : totalRating / reviews?.length;

  return (
    <section>
      <div className="section" style={{ margin: "40px auto" }}>
        <div className="details_left">
          <img
            src={photo}
            width={"100%"}
            height={450}
            style={{ borderRadius: "10px" }}
            alt=""
          />
          <div className="details_desc">
            <h2 style={{ fontWeight: "600" }}>{title}</h2>
            <p>
              <span style={{ color: "#f87a20" }}>
                <i class="ri-star-fill"></i>
              </span>
              {avgRating === 0 ? "" : avgRating}
              {totalRating === 0 ? "Not Rated" : `  ( ${reviews.length} )`}
              <span style={{ marginLeft: "20px" }}>
                <i class="ri-map-pin-line"></i> Somewhere
              </span>
            </p>
            <div className="details_cont">
              <p>
                <i class="ri-map-pin-2-line"></i>
                {city}
              </p>
              <p>
                <i class="ri-money-cny-circle-line"></i> {price}/per person
              </p>
              <p>
                <i class="ri-map-pin-time-line"></i>
                {distance} k/m
              </p>
              <p>
                <i class="ri-group-line"></i> {maxGroupSize} people
              </p>
            </div>
            <h2 style={{ fontWeight: "600" }}>Description</h2>
            <p>{desc}</p>
          </div>
          <div className="details_desc">
            <h2>Reviews ({reviews?.length} reviews)</h2>
            <div className="details_ratings">
              <span onClick={() => setTourRating(1)}>
                1
                <i
                  class="ri-star-fill"
                  style={{ color: "#f87a20", marginRight: "10px" }}
                ></i>
              </span>
              <span onClick={() => setTourRating(2)}>
                2
                <i
                  class="ri-star-fill"
                  style={{ color: "#f87a20", marginRight: "10px" }}
                ></i>
              </span>
              <span onClick={() => setTourRating(3)}>
                3
                <i
                  class="ri-star-fill"
                  style={{ color: "#f87a20", marginRight: "10px" }}
                ></i>
              </span>
              <span onClick={() => setTourRating(4)}>
                4
                <i
                  class="ri-star-fill"
                  style={{ color: "#f87a20", marginRight: "10px" }}
                ></i>
              </span>
              <span onClick={() => setTourRating(5)}>
                5
                <i
                  class="ri-star-fill"
                  style={{ color: "#f87a20", marginRight: "10px" }}
                ></i>
              </span>
            </div>
            <div className="newsearch input">
              <input
                type="text"
                ref={reviewMesRef}
                placeholder="share your thoughts "
              />
              <button onClick={submitHandler}>Subscribe</button>
            </div>
            <div className="user_reviews">
              {reviews.map((review) => {
                return (
                  <div className="review_item" key={review.name}>
                    <img src={avatar} alt="" height={60} />
                    <div className="review_content">
                      <h5>{review.name}</h5>
                      <p>
                        {new Date("08-02-2025").toLocaleDateString(
                          "en-US",
                          option
                        )}
                      </p>
                      <h4>Amazing Tour</h4>
                    </div>
                    <span className="rating">
                      {review.rating}{" "}
                      <i
                        className="ri-star-fill"
                        style={{ color: "#f87a20" }}
                      ></i>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="details_right">
          <Booking tour={tour} avgRating={avgRating} />
        </div>
      </div>
    </section>
  );
};

export default TourDetails;
