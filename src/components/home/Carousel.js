import { useEffect, useState } from "react";
import ParkCard from "../ParkCard";
import './Carousel.css'
import CarouselCard from "./CarouselCard";
import { useOutletContext, Outlet } from "react-router-dom";

const Carousel = ({ currentUser, parks }) => {
  const [userCards, setUserCards] = useState([])
  const {cardRoute} = useOutletContext()
  useEffect(() => {
    function getCarousel() {
      if (!currentUser) {
      } else {
        const userCards = currentUser.cards;

        const matchingParks = parks.filter(park => userCards.includes(park.id));

        return matchingParks;
      }
    }



    const carouselDisplay = () => {
      if (!currentUser) {
      } else {
        return getCarousel().map(park => {
          return <CarouselCard key={park.id} park={park}/>
        })
      }
    }
    setUserCards(carouselDisplay())
  }, [currentUser])



  return (
    <div className='carousel'>
      {userCards}
      <Outlet context={{cardRoute}} />
    </div>
  )
}

export default Carousel
