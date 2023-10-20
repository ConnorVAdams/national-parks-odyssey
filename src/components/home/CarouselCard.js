import './Carousel.css'
import { useOutletContext, Outlet } from 'react-router-dom';

function CarouselCard({park}) {
  const {cardRoute} = useOutletContext()
  return (
    <div className="carousel-card">
      <h3>{park.name}</h3>
      <button onClick={() => cardRoute(park)}>View Card</button>
    </div>
  )
}

export default CarouselCard;
