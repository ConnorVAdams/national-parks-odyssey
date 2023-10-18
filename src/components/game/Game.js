import { useEffect } from "react"
import {  } from "react-router-dom"
import { Outlet, useOutletContext, useNavigate, useLocation } from "react-router-dom"


const Game = () => {
  const { handleWin } = useOutletContext()
  const navigate = useNavigate()

  const location = useLocation()
  const { state: { id, path } } = location

  const initiateGame = (id) => {
    fetch(`http://localhost:3000/parkObj/${id}`)
    .then(resp => resp.json())
    .then(data => console.log(data)) 
  }
  console.log(id, path)
  // const currentParkObj = initiateGame(passedId)

  //User gets 3 minutes to play game before being navigated back to home
  setTimeout(() => {
    //TODO Display 'Sorry, you ran out of time!' message to user.
    navigate('/')
  }, 180000)

  useEffect(() => {
    if (!id) {
      navigate('/')
      //TODO select a park msg
    }
  })

  return (
    <div className="game">
      <button className="return-home-button">X</button>
      <Outlet context={{ handleWin }}/>
    </div>
  )
}

export default Game