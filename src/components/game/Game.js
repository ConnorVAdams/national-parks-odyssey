import { Outlet } from "react-router-dom"
import { useOutletContext } from "react-router-dom"


const Game = () => {

  const { handleWin } = useOutletContext()
  
  return (
    <div className="game">
      <Outlet context={{ handleWin }}/>
    </div>
  )
}

export default Game