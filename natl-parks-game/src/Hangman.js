import React, {useState, useEffect} from "react";
import "./Hangman.css"


function Hangman({parkObj}) {
  const [correctLetters, setCorrectLetters] = useState([])
  const [randomAttraction, setRandomAttraction] = useState("")
  const [usedLetters, setUsedLetters] = useState([])

  //temporary
  const selectedPark = parkObj[0].attractions

  //function to grab random element from array
  const randomElement = (array) => {
    const attraction = array[Math.floor(Math.random() * array.length)]
    setRandomAttraction(attraction)
  }
  //run the function, but will be triggered with useEffect when something is clicked
  useEffect(() => {
    console.log('useEffect triggered')
    randomElement(selectedPark)
  },[selectedPark])
  //reset display of hidden word
  useEffect(() => {

  })


  //hidden word player needs to guess
  const hiddenWord = randomAttraction.split('').map((letter, i) => {
    if (letter === " ") {
      return <span key={i} className="word-space">&nbsp;</span>;
    } else {
      const displayLetter = (usedLetters.includes(letter) || letter === " ") ? letter : "_";
      return (
        <span key={i} className="word">
          {displayLetter}
        </span>
      );
    }
  });

  //when letter is clicked
  const handleClick = (letter) => {
    if (!usedLetters.includes(letter)) {
      setUsedLetters([...usedLetters, letter]);
    }
  }

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

  const alphabets = ["A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z"]




  return(
    <div>
      <h1>Hangman - Find the Hidden Word</h1>
      <p>Hint: What are the major attractions at the National Park?</p>
      <div className="hidden-word">{hiddenWord}</div>
      {renderButtons()}
      {hiddenWord.every(item => item.props.children !== "_") && <p>You Won!</p>}
    </div>
  )
}

export default Hangman
