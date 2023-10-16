import React, {useState} from "react";
import "./Hangman.css"


function Hangman() {
  const [correctAttempt, setCorrectAttempt] = useState([])

  //function to grab random element from array
  const randomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)]
  }

  const test = "TEST"
  const alphabets = ["A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z"]

  const


  return(
    <div>
      <p>{test.split("").fill("_").join(" ")}</p>
      {alphabets.map((letter, index) => (
        <button className="letter" key={index}>{letter}</button>
      ))}
    </div>
  )
}

export default Hangman
