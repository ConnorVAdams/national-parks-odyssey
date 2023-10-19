import { useNavigate } from "react-router-dom"

const HomeButton = () => {
    const navigate = useNavigate()
  return (
  <button onClick={() => navigate('.../')}>Return to Map</button>
  )
}

export default HomeButton