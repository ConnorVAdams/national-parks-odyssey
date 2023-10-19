import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import "./Hangman.css"

function Hangman() {
  const { handleWin, attractions } = useOutletContext()

  const [randomAttraction, setRandomAttraction] = useState("")
  const [correctGuesses, setCorrectGuesses] = useState([])
  const [wrongGuesses, setWrongGuesses] = useState([])
  const [status, setStatus] = useState("")

  //define letters
  const alphabets = ["A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z"];

  //reset game (with a loss)
  const reset = () => {
    randomElement(attractions)
    setCorrectGuesses((resets) => [])
    setWrongGuesses((resets) => [])
    setStatus("")
  }



  //function to grab random element from array
  const randomElement = (array) => {
    const attraction = array[Math.floor(Math.random() * array.length)]
    setRandomAttraction(attraction.replace(/\s/g, "").toUpperCase())
  }
  //run the function, but will be triggered with useEffect when something is clicked
  useEffect(() => {
    if (attractions) {
      randomElement(attractions)
    }
  }, [attractions])

  //handle click
  const handleClick = (letter) => {
    if (wrongGuesses.length > 5 || status)
      return
    if (randomAttraction.includes(letter)) {
      setCorrectGuesses([...correctGuesses, letter])
    }
    else {
      setWrongGuesses([...wrongGuesses, letter])
    }
  }

  //render buttons filtering for already used buttons
  const renderButtons = () => {
    return alphabets
      .map((letter) => (
        <button className="letter"
          key={letter}
          onClick={() => handleClick(letter)}
          disabled={correctGuesses.includes(letter) || wrongGuesses.includes(letter)}
        >
          {letter}
        </button>
      ))
  }
  //check if won
  useEffect(() => {
    if (correctGuesses.length && randomAttraction.split("").every(letter => correctGuesses.includes(letter)))
      setStatus('win');
  }, [correctGuesses])
  //check if lost
  useEffect(() => {
    if (wrongGuesses.length === 5)
      setStatus('lose');
  }, [wrongGuesses])
  //check the progress
  const progress = () => {
    return <p>{`You have ${wrongGuesses.length}/5 wrong guesses`}</p>
  }
  //show end result
  const renderStatus = () => {
    if (!status) {
      return
    }
    else {
      return <div>
        <p>You {status}!</p>
        <p>{status === "win" ? "Claim your Card" : <button onClick={reset} >Try again</button>}</p>
      </div>
    }
  }
  //callback when the game ends
  useEffect(() => {
    if (status === "win") {
      const endTime = Date.now()
      handleWin(endTime, wrongGuesses)
    }
  })

  //display hidden word
  const hiddenWord = randomAttraction.split('').map(letter =>
    correctGuesses.includes(letter) ? letter : "_").join(" ");

  return <div className="hangman-container">
    <button onClick={reset}>Retry</button>
    <p>{hiddenWord}</p>
    <p>{progress()}</p>
    <div>
      {renderButtons()}
    </div>
    {renderStatus()}
  </div>
}

export default Hangman
