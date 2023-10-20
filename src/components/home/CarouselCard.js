import './Carousel.css'

function CarouselCard({park, cardRoute}) {
  return (
    <div className="carousel-card">
      <h3>{park.name}</h3>
      <button onClick={cardRoute}>View Card</button>
    </div>
  )
}

export default CarouselCard;
