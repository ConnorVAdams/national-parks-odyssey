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
      <p className="content">
        <p><strong>Founded:</strong> {year}</p>
        <p><strong>Location: </strong>{location[0]}</p>
        <p className="description">{description}</p>
      </p>
      <button className="card-button" onClick={handleClick}>
        <i className="fa fa-tree tree-1"></i>
        Return to Home
        <i className="fa fa-tree tree-2"></i>
      </button>
    </div>
  )
}

export default ParkCard
