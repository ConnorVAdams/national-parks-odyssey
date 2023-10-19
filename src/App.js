import { calculateScore, handleWin } from './helpers.js'
import { useState, useEffect } from 'react'
import { Outlet } from "react-router-dom"
import Header from './components/nav/Header'
import Footer from './components/nav/Footer'
import './App.css'
import animals from './components/game/animalData.js'

const URL = 'http://localhost:3000/parkObj'

function App() {
const [parks, setParks] = useState([])
const [points, setPoints] = useState(0)

const fetchAllParks = () => {
  fetch(URL)
  .then(resp => resp.json())
  .then(data => setParks(data))
}

useEffect(() => {
  fetchAllParks()
}, [])

//Score calculator specific to memory game
  //TODO Can be generalized to calculate score for every game?
  const calculateScore = (finalTime, finalCount) => {
    const minimumMoves = 1
    const minimumTime = Date.now()
    //Awards player more points for lower number of moves and/or lower elapsed time, with a maximum of 10,000.
    //TODO What should maximum points for each game be?
    return Math.round((minimumTime / finalTime) * (minimumMoves / finalCount) * 10000)
  }

  //Receives elapsed time and number of moves from <AnimalBoard /> and passes it through calculateScore()
  const handleWin = (endTime, count) => {
    const score = calculateScore(endTime, count)
    console.log(`Congratulations, you earned ${score} points!`)
  }

  //TODO handleWin
  //1. Calculate score
  //2. Display score to user
  //3. PATCH database with gameWon: true

  //4. Add card to trophy case.
  //5. Pop up card to user, user can navigate '/' from it.
  //6. Update points container.
  //7. Updates points/parks in userObj.


  return (
    <div className='wrapper'>
      <Header points={points} />
      <Outlet context={{ parks, handleWin }} />
      <Footer />
    </div>
  );
}

export default App;
