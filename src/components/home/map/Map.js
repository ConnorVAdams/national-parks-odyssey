import React, {useState, useEffect, useRef} from 'react'
import NavButtons from '../../nav/NavButtons'
import ParkIcon from './ParkIcon'
// import ParkCard from './ParkCard'
// import Game from './Game'
import { Wrapper } from "@googlemaps/react-wrapper"
import GoogleMap from './GoogleMap'



const Map = () => {
  //test the callback
  const loadGame = () => {
    console.log("clicked")
  }
  return (
    <>
      <div className='map' style={{ height: "100%", width: '100%' }}>
        <Wrapper apiKey="AIzaSyDluKUqWkz1grc2yKMFvax4DSK3_kc-Qjk" version="beta" libraries={["marker"]}>
          <GoogleMap loadGame={loadGame}/>
        </Wrapper>
        {/* <ParkIcon />
        <ParkCard />
        <Game /> */}
      </div>
    </>
  )
}

export default Map
