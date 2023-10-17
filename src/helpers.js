//Score calculator that takes an elapsed time and number of moves.
const calculateScore = (finalTime, finalCount) => {
const minimumMoves = 1
const minimumTime = Date.now()
//Awards player more points for lower number of moves and/or lower elapsed time, with a maximum of 10,000.
return Math.round((minimumTime / finalTime) * (minimumMoves / finalCount) * 10000)
}

//Receives elapsed time and number of moves from <AnimalBoard /> and passes it through calculateScore()
const handleWin = (endTime, count) => {
const score = calculateScore(endTime, count)
console.log(`Congratulations, you earned ${score} points!`)
}

export { calculateScore, handleWin }