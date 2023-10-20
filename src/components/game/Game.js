import { useEffect, useState } from "react"
import { Outlet, useOutletContext, useNavigate, useLocation, redirect } from "react-router-dom"

const Game = () => {
  const { handleWin } = useOutletContext()
  const navigate = useNavigate()
  const locationData = useLocation()
  const [currentGameData, setCurrentGameData] = useState({
    gamePark: {},
    gamePath: ''
  })

  useEffect(() => {
    if (locationData) {
      fetch(`http://localhost:3000/parkObj/${locationData.state.id}`)
      .then(resp => resp.json())
      .then(data => {
  
      setCurrentGameData(current => ({...current,
        gamePark: data,
        gamePath: locationData.state.path
      }))
    })}
  }, [])

    return (
      <>
        <div className="game">
        <h2 className="game-title"> Welcome to {currentGameData.gamePark.name}!</h2>
        
          <Outlet context={{ handleWin, currentGameData }}/>
          
        </div>
      </>
    )
}

export default Game
