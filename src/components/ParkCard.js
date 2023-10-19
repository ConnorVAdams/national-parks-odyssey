import { useNavigate } from "react-router-dom"

const ParkCard = ({ park, resetCard }) => {
  const navigate = useNavigate()
  
  const handleClick = () => {
    navigate('/')
    resetCard()
  }

  return (
    <div className='park-card shown'>
      <h1>ParkCard</h1>
      <button onClick={handleClick}>Return to Home</button>
    </div>
  )
}

export default ParkCard