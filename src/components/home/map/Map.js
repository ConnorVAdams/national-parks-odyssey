import React, {useState, useEffect, useRef} from 'react'
import { useOutletContext, useNavigate } from 'react-router-dom'
import { Wrapper } from "@googlemaps/react-wrapper"
import GoogleMap from './GoogleMap'



const Map = () => {
  const navigate = useNavigate()
  const {parks} = useOutletContext()

  //test the callback
  const loadGame = (parkID) => {
    //Provide three possible game paths.
    const games = ['/game/memory', '/game/hangman', '/game/arrow-game']
    const randomPath = games[Math.floor(Math.random() * games.length)]
    navigate(randomPath, { state: {id:parkID, path: randomPath} })
    //TODO ^ Make this dynamic based on clicked ParkIcon's id
  }

  return (
    <>
      <div className='map' style={{ height: "100%", width: '100%' }}>
        <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} version="beta" libraries={["marker"]}>
          <GoogleMap loadGame={loadGame} parks={parks}/>
        </Wrapper>
      </div>
    </>
  )
}

export default Map
