import './App.css'
import AnimalBoard from './AnimalBoard'
import Book from './Book'
import animals from './animalData'
import Hangman from "./Hangman"
import Home from './Home'

const App = () => {

  // //Score calculator specific to memory game
  // //TODO Can be generalized to calculate score for every game?
  // const calculateScore = (finalTime, finalCount) => {
  //   const minimumMoves = 1
  //   const minimumTime = Date.now()
  //   //Awards player more points for lower number of moves and/or lower elapsed time, with a maximum of 10,000.
  //   //TODO What should maximum points for each game be?
  //   return Math.round((minimumTime / finalTime) * (minimumMoves / finalCount) * 10000)
  // }

  // //Receives elapsed time and number of moves from <AnimalBoard /> and passes it through calculateScore()
  // const handleWin = (endTime, count) => {
  //   const score = calculateScore(endTime, count)
  //   console.log(`Congratulations, you earned ${score} points!`)
  // }



  return (
    <div className="App">
        {/*<Game /> component for memory game.*/}
        {/* <AnimalBoard animals={animals} handleWin={handleWin} /> */}
        {/* <Hangman /> */}
        <Home />
    </div>
  );
}

export default App;
