import { calculateScore, handleWin } from './helpers.js'
import { useState, useEffect } from 'react'
import { Outlet } from "react-router-dom"
import Header from './components/nav/Header'
import Footer from './components/nav/Footer'
import './App.css'

const URL = 'http://localhost:3000/parkObj'

function App() {
const [parks, setParks] = useState([])

const fetchAllParks = () => {
  fetch(URL)
  .then(resp => resp.json())
  .then(data => setParks(data))
}

useEffect(() => {
  fetchAllParks()
}, [])

  return (
    <div className='wrapper'>
      <Header />
      <Outlet context={{ parks }} />
      <Footer />
    </div>
  );
}

export default App;
