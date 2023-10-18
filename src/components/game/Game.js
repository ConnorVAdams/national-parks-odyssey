import { useEffect, useState } from "react"
import { Outlet, useOutletContext, useNavigate, useLocation } from "react-router-dom"


const Game = () => {
  const [currentPark, setCurrentPark] = useState({})
  const { handleWin } = useOutletContext()
  const navigate = useNavigate()

  const locationData = useLocation()
  const { state: { id, path } } = locationData

  const initiateGame = (id) => {
    fetch(`http://localhost:3000/parkObj/${id}`)
    .then(resp => resp.json())
    .then(data => setCurrentPark(data)) 
  }

  initiateGame(id)
  console.log(id, path, currentPark)

  //User gets 3 minutes to play game before being navigated back to home
  setTimeout(() => {
    //TODO Display 'Sorry, you ran out of time!' message to user.
    navigate('/')
  }, 180000)

  // useEffect(() => {
  //   if (!id) {
  //     navigate('/')
  //     //TODO select a park msg
  //   }
  // })

  const { location, wildlife, attractions } = currentPark

  return (
    <div className="game">
      <button className="return-home-button">X</button>
      <Outlet context={{ handleWin, wildlife, location, attractions }}/>
    </div>
  )
}

export default Game