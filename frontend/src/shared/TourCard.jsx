import "./tour-card.css";
import { NavLink } from "react-router-dom";

const TourCard = ({ tour }) => {
  const { id, title, photo, city, price, featured, reviews } = tour;

  const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);
  const avgRating =
    totalRating === 0
      ? ""
      : totalRating === 1
      ? totalRating
      : totalRating / reviews?.length;

  return (
    <>
      <div className="card">
        <div className="card_img">
          <img src={photo} alt="" height={"50%"} width={"100%"} />
          {featured && <button>Feature</button>}
        </div>
        <div className="card_content">
          <div className="title">
            <p>
              <span>
                <i class="ri-map-pin-line"></i>
              </span>
              {city}
            </p>
            <p>
              <span>
                <i class="ri-star-fill"></i>
              </span>
              {avgRating === 0 ? "" : avgRating}
              {totalRating === 0 ? "Not Rated" : `  ( ${reviews.length} )`}
            </p>
          </div>
          <h2>
            <NavLink to={`/tours/${id}`}>{title}</NavLink>
          </h2>
          <div className="title" style={{ alignSelf: "self-end" }}>
            <small>
              <span>${price}</span> /per person
            </small>
            <NavLink to={`/tours/${id}`}>
              <button>Book Now</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourCard;
