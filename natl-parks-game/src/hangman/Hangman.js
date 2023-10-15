import React, {useState} from "react";

function Hangman() {
  const test = "TEST"
  const alphabets = ["A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z"]

  return(
    <div>
      <p>{test.split("").fill("_").join(" ")}</p>
      {alphabets.map((letter, index) => (
        <button key={index}>{alphabet}</button>
      ))}
    </div>
  )
}
