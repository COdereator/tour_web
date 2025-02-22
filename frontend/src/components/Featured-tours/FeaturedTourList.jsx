import TourCard from "../../shared/TourCard";
import tourData from "../../data/tours";

const FeaturedTourList = () => {
  return (
    <>
      {tourData.map((tour) => (
        <div key={tour.id} class="card">
          <TourCard tour={tour} />
        </div>
      ))}
    </>
  );
};

export default FeaturedTourList;
