import { useState, useEffect } from 'react'
import Map from './map/Map.js'
import Leaderboard from './Leaderboard.js'
import Carousel from './Carousel.js'
import NavButtons from '../nav/NavButtons.js'
import { useOutletContext } from 'react-router-dom'

const Home = () => {
  const { parks, currentUser } = useOutletContext()
  return (
    <>
      <NavButtons />
      <Leaderboard />
      <Map />
      <Carousel parks={parks} currentUser={currentUser}/>
    </>
  )
}

export default Home