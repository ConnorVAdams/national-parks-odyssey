import { useEffect } from "react"
import {  } from "react-router-dom"
import { Outlet, useOutletContext, useNavigate, useLocation } from "react-router-dom"
import GameNav from "../nav/GameNav"

const Game = ({ restartGame }) => {
  const { handleWin } = useOutletContext()
  const navigate = useNavigate()
  const locationData = useLocation()
  const [currentGameData, setCurrentGameData] = useState({
    gamePark: {},
    gameId: 0,
    gamePath: ''
  })

  const startGame = (id, path) => {
    console.log(id, path)
    fetch(`http://localhost:3000/parkObj/${id}`)
    .then(resp => resp.json())
    .then(data => {

    setCurrentGameData(current => ({...current,
      gamePark: data,
      gameId: id,
      gamePath: path
    }))
  })}

  useEffect(() => { 
    startGame(locationData.state.id, locationData.state.path)
 }, [])

  console.log(currentGameData)


  //TODO Timer

  //TODO handleWin

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


  //TODO Route protection
  // useEffect(() => {
  //   if (!id) {
  //     navigate('/')
  // Alert user to 'select a park' msg
  //   }
  // })

  const { gamePark: { attractions, wildlife }, gameId, gamePath } = currentGameData

  return (
    <div className="game">
      {/* <GameNav path={path}/> */}
      <button onClick={restartGame}>Retry</button>
      <button onClick={() => navigate('../')}>Return to Map</button>
      {/* Should we allow user to choose a different type of game without returning to Home? */}
      {/* Destructure whatever park.property props you need for your game above and feed them to the context below:  */}
      <Outlet context={{ handleWin, attractions, wildlife }}/>
      {/* <NotifyBar /> */}
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