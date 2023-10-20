import { useEffect, useState } from "react";
import ParkCard from "../ParkCard";
import './Carousel.css'
import CarouselCard from "./CarouselCard";

const Carousel = ({ currentUser, parks }) => {
  const [userCards, setUserCards] = useState([])

  useEffect(() => {
    console.log(currentUser)
    function getCarousel() {
      if (!currentUser) {
        console.log('y')
      } else {
        const userCards = currentUser.cards;

        const matchingParks = parks.filter(park => userCards.includes(park.id));

        return matchingParks;
      }
    }

    //function to navigate to parkcard
    const cardRoute = () => {
      console.log("need to route!")
    }

    const carouselDisplay = () => {
      if (!currentUser) {
        console.log('y')
      } else {
        return getCarousel().map(park => {
          return <CarouselCard key={park.id} park={park} cardRoute={cardRoute}/>
        })
      }
    }
    setUserCards(carouselDisplay())
    console.log(currentUser)
  }, [currentUser])



  return (
    <div className='carousel'>
      {userCards}
    </div>
  )
}

export default Carousel
