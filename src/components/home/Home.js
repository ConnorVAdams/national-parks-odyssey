import { useState, useEffect } from 'react'
import Map from './map/Map.js'
import Leaderboard from './Leaderboard.js'
import Carousel from './Carousel.js'
import NavButtons from '../nav/NavButtons.js'

const Home = () => {


  return (
    <>
      <NavButtons />
      <Leaderboard />
      <Map />
      <Carousel />
    </>
  )
}

export default Home