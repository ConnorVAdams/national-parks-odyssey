import { useEffect, useState } from "react"
import { Outlet, useOutletContext, useNavigate, useLocation } from "react-router-dom"
import GameNav from "../nav/GameNav"

const Game = () => {
  const { handleWin } = useOutletContext()
  const navigate = useNavigate()
  const locationData = useLocation()
  const [currentGameData, setCurrentGameData] = useState({
    gamePark: {},
    gamePath: ''
  })

  const startGame = (id, path) => {
    fetch(`http://localhost:3000/parkObj/${id}`)
    .then(resp => resp.json())
    .then(data => {

    setCurrentGameData(current => ({...current,
      gamePark: data,
      gamePath: path
    }))
  })}

  useEffect(() => { 
    startGame(locationData.state.id, locationData.state.path)
 }, [])

  //TODO Timer

  //TODO handleWin

  //TODO Reset

  //User gets 3 minutes to play game before being navigated back to home
  setTimeout(() => {
    //TODO Display 'Sorry, you ran out of time!' message to user.
    navigate('/')
  }, 180000)


  // //TODO Route protection
  // useEffect(() => {
  //   if (!id) {
  //     navigate('/')
  // setTimeout alert('choose a park')
  // Navigate user to ErrorPage
  //   }
  // })

  const { gamePark: { id, name, attractions, wildlife, image, location, gameWon } } = currentGameData
  const { path } = currentGameData
  console.log(id)

    return (
      <div className="game">
        {/* <GameNav path={path}/> */}
        <button onClick={() => navigate('../')}>Return to Map</button>
        {/* Should we allow user to choose a different type of game without returning to Home? */}
        {/* Destructure whatever park.property props you need for your game above and feed them to the context below:  */}
        <Outlet context={{ handleWin, id, attractions, wildlife, image, name }}/>
        {/* <NotifyBar /> */}
      </div>
    )
}

export default Game