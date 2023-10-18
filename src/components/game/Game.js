import { useEffect, useState } from "react"
import { Outlet, useOutletContext, useNavigate, useLocation } from "react-router-dom"


const Game = () => {
  const { handleWin } = useOutletContext()
  const navigate = useNavigate()
  const locationData = useLocation()
  const [currentGameData, setCurrentGameData] = useState({
    park: {},
    id: 0,
    path: ''
  })

  useEffect(() => {
    fetch(`http://localhost:3000/parkObj/${locationData.state.id}`)
      .then(resp => resp.json())
      .then(data => {

        setCurrentGameData(current => ({
          ...current,
          park: data,
          id: locationData.state.id,
          path: locationData.state.path
        }))
      })
  }, [])

  console.log(currentGameData)

  //User gets 3 minutes to play game before being navigated back to home
  setTimeout(() => {
    //TODO Display 'Sorry, you ran out of time!' message to user.
    navigate('/')
  }, 18000000) //temporary change

  //TODO Route protection
  // useEffect(() => {
  //   if (!id) {
  //     navigate('/')
  // Alert user to 'select a park' msg
  //   }
  // })

  // const { location, wildlife, attractions } = currentPark

  const { park: { attractions }, id, path } = currentGameData

  return (
    <div className="game">
      <button onClick={() => navigate('/')} className="return-home-button">X</button>
      <button onClick={() => navigate(path)} className="restart-game-button">Restart Game</button>
      {/* Should we allow user to choose a different type of game without returning to Home? */}
      {/* Destructure whatever park.property props you need for your game above and feed them to the context below:  */}
      <Outlet context={{ handleWin, attractions }} />
      {/* <NotifyBar /> */}
    </div>
  )
}

export default Game
