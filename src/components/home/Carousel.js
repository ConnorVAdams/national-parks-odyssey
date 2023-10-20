import { useEffect, useState } from "react";
import ParkCard from "../ParkCard";
import './Carousel.css'

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

    const carouselDisplay = () => {
      if (!currentUser) {
        console.log('y')
      } else {
        return getCarousel().map(park => {
          return <ParkCard key={park.id} park={park} />
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
