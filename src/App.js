import { calculateScore, handleWin } from './helpers.js'
import { useState, useEffect } from 'react'
import { Outlet } from "react-router-dom"
import Header from './components/nav/Header'
import Footer from './components/nav/Footer'
import './App.css'
import animals from './components/game/animalData.js'
import ParkCard from './components/ParkCard.js'
import noDuplicates from './wildlifeData.js'
import { all } from 'q'

const URL = 'http://localhost:3000/parkObj'

function App() {
const [parks, setParks] = useState([])
const [points, setPoints] = useState(0)
const [card, setCard] = useState({
  park: {},
  displayCard: false
})
const [currentUser, setCurrentUser] = useState("")
const [users, setUsers] = useState([])

const handleCreateUserSubmit = async (username) => {
  try {
    // Fetch the current users
    const response = await fetch('http://localhost:3000/users')
    const currentUsers = await response.json()

     // Check if the username already exists
     if (currentUsers.some(user => user.username === username)) {
      alert('Username already exists. Choose a different username.')
      // Optionally, display an error message to the user
      return
    }

    // Add the new user
    const newUser = {
      id: currentUsers.length + 1,
      username,
      points: 0,
      cards: [],
    }



    // Update the users in the db.json file using POST
    await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    console.log('User created successfully!')
  } catch (error) {
    alert('Error creating user:', error)
  }
}

const handleLoginUserSubmit = async (username) => {
  try {
    const response = await fetch('http://localhost:3000/users')
    const currentUsers = await response.json()

    const foundUser = currentUsers.find((user) => user.username === username)

    if (foundUser) {
      console.log('User found:', foundUser)
      setCurrentUser(foundUser) // Set currentUser state correctly
    } else {
      alert('User not found. Please check your username.')
    }
  } catch (error) {
    alert('Error finding user:', error)
  }
}

const fetchAllUsers = () => {
  fetch("http://localhost:3000/users")
  .then(resp => resp.json())
  .then(user => setUsers(user))
  .catch(error => alert(error))
}

useEffect(() => {
  fetchAllUsers()
}, [])

const fetchAllParks = () => {
  fetch(URL)
  .then(resp => resp.json())
  .then(data => setParks(data))
  .catch(error => alert(error))
}

useEffect(() => {
  fetchAllParks()
}, [])

// console.log(noDuplicates)

//Score calculator specific to memory game
  //TODO Can be generalized to calculate score for every game?
  const calculateScore = (finalTime, finalCount) => {
    const minimumMoves = 1
    const minimumTime = Date.now()
    //Awards player more points for lower number of moves and/or lower elapsed time, with a maximum of 10,000.
    //TODO What should maximum points for each game be?
    return Math.round((minimumTime / finalTime) * (minimumMoves / finalCount) * 10000)
  }

  //Receives elapsed time and number of moves from <AnimalBoard /> and passes it through calculateScore()
  const handleWin = (gameId, param1, param2) => {
    const score = calculateScore(param1, param2)
    //TODO Only patch score if new score is higher
    fetch(`${URL}/${gameId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        gameWon: true,
        pointValue: score
      })
    })
    .then(resp => resp.json())
    .then(data => {
      setPoints(current => current + data.pointValue)

      setCurrentUser((user) => ({
        ...user,
        points: user.points + data.pointValue,
      }))

       // Patch request to update user points in the database
       fetch(`http://localhost:3000/users/${currentUser.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          points: currentUser.points + data.pointValue,
        }),
      })

      setCard({...card,
        park: data,
        displayCard: true
      })
    })
    .then(fetchAllParks())
    console.log(`Congratulations, you earned ${score} points!`)
  }

  const resetCard = () => {
    setCard({
      park: {},
      displayCard: false
    })
  }

  //TODO handleWin
  // * 1. Calculate score
  // * 3. PATCH database with gameWon: true

  // * 4 . Display score to user
  // * 5. Pop up card to user, user can navigate '/' from it.
  // * 6. Update points container.

  //7. Updates points/parks in userObj.


  return (
    <div className={card.displayCard ? 'wrapper hidden' : 'wrapper'}>
      <Header currentUser={currentUser} onLoginUserSubmit={handleLoginUserSubmit} onCreateUserSubmit={handleCreateUserSubmit} />
      <Outlet context={{ currentUser, users, parks, handleWin }} />
      {card.displayCard ? <ParkCard park={card.park} resetCard={resetCard} /> : null}
      <Footer />
    </div>
  );
}

export default App;
