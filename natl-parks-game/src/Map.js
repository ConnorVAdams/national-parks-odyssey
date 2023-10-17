import React, {useState, useEffect, useRef} from 'react'
import NavButtons from './NavButtons'
import ParkIcon from './ParkIcon'
import ParkCard from './ParkCard'
import Game from './Game'
import { Wrapper } from "@googlemaps/react-wrapper"
import GoogleMap from './GoogleMap'



const Map = () => {

  return (
    <>
      <div className='map' style={{ height: "100%", width: '100%' }}>
        <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY} version="beta" libraries={["marker"]}>
          <GoogleMap />
        </Wrapper>
        {/* <ParkIcon />
        <ParkCard />
        <Game /> */}
      </div>
    </>
  )
}

export default Map
