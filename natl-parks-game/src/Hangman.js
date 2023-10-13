import React, {useState} from "react"

function Hangman() {
  //would be a prop of whatever words
  const testWords = ["apple", "banana", "computer"]
  const [word, setWord] = useState("")
  const alphabets = ["A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z"]

  return(
    <div>
      <h1>Hangman</h1>
    </div>
  )
}
