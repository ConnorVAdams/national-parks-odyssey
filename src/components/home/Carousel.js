import { useEffect, useState } from "react";
import ParkCard from "../ParkCard";
import "./Carousel.css"
import Slide from './Slide'
import VerticalCarousel from "./VerticalCarousel";
import { config } from "react-spring";

const Carousel = ({ currentUser, parks }) => {
  const [userCards, setUserCards] = useState([]);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showNavigation, setShowNavigation] = useState(true);

// useEffect(() => {
//   function getCarousel() {
//     if (!currentUser) {
//     } else {
//       const userCards = currentUser.cards;

//       const matchingParks = parks.filter(park => userCards.includes(park.id));

//       return matchingParks;
//     }
//   }

//   const carouselDisplay = () => {
//     if (!currentUser) {
//     } else {
//       return getCarousel().map(park => {
//         return <ParkCard key={park.id} park={park}/>
//     })
//     }
//   }
//   setUserCards(carouselDisplay())
// }, [currentUser])

  useEffect(() => {
    function getCarousel() {
      if (!currentUser) {
        return [];
      } else {
        const userCards = currentUser.cards;
        const matchingParks = parks.filter((park) => userCards.includes(park.id));
        return matchingParks;
      }
    }

    setUserCards(getCarousel());
  }, [currentUser, parks]);

  return (
    <div className="carousel">
      <div
        style={{
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "20%%",
          height: "20%",
          margin: "0",
          background: "#7FfFbF"
        }}
      >
        <VerticalCarousel
          slides={userCards}
          offsetRadius={offsetRadius}
          showNavigation={showNavigation}
          animationConfig={config.gentle}
        />
      </div>
    </div>
  );
};

export default Carousel
