import React, {useState, useEffect, useRef} from 'react'
import { useOutletContext, useNavigate } from 'react-router-dom'
import { Wrapper } from "@googlemaps/react-wrapper"
import GoogleMap from './GoogleMap'



const Map = () => {
  const {parks} = useOutletContext()
  const navigate = useNavigate();

  //navigate to new route for game
  const loadGame = () => {
    navigate("/game")
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
