import {  } from "react-router-dom"
import { Outlet, useOutletContext, useNavigate, useLocation } from "react-router-dom"


const Game = () => {
  const { handleWin } = useOutletContext()
  const navigate = useNavigate()

  const location = useLocation()
  const passedId = location.state

  const initiateGame = (id) => {
    fetch(`http://localhost:3000/parkObj/${id}`)
    .then(resp => resp.json())
    .then(data => console.log(data)) 
  }

  const currentParkObj = initiateGame(passedId)

  //User gets 3 minutes to play game before being navigated back to home
  setTimeout(() => {
    //TODO Display 'Sorry, you ran out of time!' message to user.
    navigate('/')
  }, 180000)

  return (
    <div className="game">
      <Outlet context={{ handleWin }}/>
    </div>
  )
}

export default Game