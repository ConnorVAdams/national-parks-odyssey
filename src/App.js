import { calculateScore, handleWin } from './helpers.js'
import { useState, useEffect } from 'react'
import { Outlet } from "react-router-dom"
import Header from './components/nav/Header'
import Footer from './components/nav/Footer'
import './App.css'
import wildlifeData from './wildlifeData.js'
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
const [usersParks, setUsersParks] = useState([])

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
      
      setCurrentUser(foundUser)
      
    // Set currentUser state correctly
    } else {
      alert('User not found. Please check your username.')
    }
  } catch (error) {
    alert('Error finding user:', error)
  }
}
//  if (parks) {
//   parks.filter(park => currentUser.cards.forEach(id => console.log(id)))
//  }
// useEffect(() => {
//   if (currentUser) {
//     setUsersParks((parks) => )
//   }
// }, [currentUser])

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

//Score calculator specific to memory game
  const calculateScore = (finalTime) => {
    return Math.round(10000000 / (finalTime))
  }

  //Receives elapsed time and number of moves from <AnimalBoard /> and passes it through calculateScore()
  const handleWin = (gameId, time) => {
    const score = calculateScore(time)
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
          cards: [...currentUser.cards, gameId]
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
