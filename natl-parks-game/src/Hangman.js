import React, {useState, useEffect} from "react";
import "./Hangman.css"


function Hangman({parkObj}) {
  const [correctAttempt, setCorrectAttempt] = useState([])
  const [randomAttraction, setRandomAttraction] = useState("")
  //needs filter to idntify based on id, which national park was chosen

  const selectedPark = parkObj[0].attractions

  //function to grab random element from array
  const randomElement = (array) => {
    const attraction = array[Math.floor(Math.random() * array.length)]
    setRandomAttraction(attraction)
  }
  //run the function, but will be triggered with useEffect when something is clicked
  useEffect(() => {
    randomElement(selectedPark)
  },[selectedPark])


  //hidden word player needs to guess
  const hiddenWord = randomAttraction.split('').map(letter =>
    correctAttempt.includes(letter) ? letter : "_").join(" ");

  //when letter is clicked
  const handleClick = (letter) => {
    if (randomAttraction.includes(letter)) {
      setCorrectAttempt((attempts) => [...attempts, letter])
    }
  }

  const test = "TEST"
  const alphabets = ["A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z"]




  return(
    <div>
      <p>{hiddenWord}</p>
      {alphabets
      .map((letter, index) => (
        <button className="letter"
        key={index}
        onClick={(letter) => handleClick}>{letter}</button>
      ))}
      {!hiddenWord.includes("_") && <p>You Won!</p>}
    </div>
  )
}

export default Hangman
