import React, { useState, useEffect } from "react";
import "./Hangman.css"

function UHangman({parkObj}) {
  const [randomAttraction, setRandomAttraction] = useState("")
  const [correctGuesses, setCorrectGuesses] = useState([])
  const [usedLetters, setUsedLetters] = useState([])

  //define letters
  const alphabets = ["A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z"];

  //temporary
  const selectedPark = parkObj[0].attractions

  //function to grab random element from array
  const randomElement = (array) => {
    const attraction = array[Math.floor(Math.random() * array.length)]
    setRandomAttraction(attraction.replace(/\s/g, "").toUpperCase())
  }
  //run the function, but will be triggered with useEffect when something is clicked
  useEffect(() => {
    console.log('useEffect triggered')
    randomElement(selectedPark)
  }, [selectedPark])
  //reset display of hidden word
  useEffect(() => {

  })

 //handle click
 const handleClick = (letter) => {
   if (randomAttraction.includes(letter) || !usedLetters.includes(letter)) {
     setCorrectGuesses([...correctGuesses, letter])
     setUsedLetters([...usedLetters, letter]);
   }}

  //render buttons filtering for already used buttons
  const renderButtons = () => {
    return alphabets
      .filter((letter) => (!usedLetters.includes(letter)))
      .map((letter) => (
        <button className="letter"
          key={letter}
          onClick={() => handleClick(letter)}
          disabled={usedLetters.includes(letter)}
        >
          {letter}
        </button>
      ))
  }


  //display hidden word
  const hiddenWord = randomAttraction.split('').map(letter =>
    correctGuesses.includes(letter) ? letter : "_").join(" ");

  return <div>
    <p>{hiddenWord}</p>
    {renderButtons()}
    {!hiddenWord.includes("_") && <p>You won!</p>}
  </div>
}

export default UHangman
