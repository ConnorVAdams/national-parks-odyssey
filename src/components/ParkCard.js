import { useNavigate } from "react-router-dom"
import "./ParkCard.css"

const ParkCard = ({ park, resetCard }) => {
  const {name, year, location, description, image, visitors, pointValue } = park
  console.log(name)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
    resetCard()
  }

  return (
    <div className='park-card shown'>
      <div>
        <h1>{name}</h1>
        <h3>{pointValue} POINTS</h3>
      </div>
      <img className="card-img" src={image} alt={name}></img>
      <button onClick={handleClick}>Return to Home</button>
    </div>
  )
}

export default ParkCard
