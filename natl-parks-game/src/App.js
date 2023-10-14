import './App.css'
import AnimalBoard from './AnimalBoard'
import animals from './animalData'

function App() {

  const calculateScore = (finalTime, finalCount) => {
    const minimumMoves = 1
    const minimumTime = Date.now()
    return Math.round((minimumTime / finalTime) * (minimumMoves / finalCount) * 10000)
  }

  const handleWin = (endTime, count) => {
    const score = calculateScore(endTime, count)
    console.log(`Congratulations, you earned ${score} points!`)
  }

  return (
    <div className="App">
        <AnimalBoard animals={animals} handleWin={handleWin} />
    </div>
  );
}

export default App;
