import React, { useState, useEffect, useRef } from 'react'
import { Wrapper } from "@googlemaps/react-wrapper"
import ParkIcon from './ParkIcon';
import parkObj from './TestData';

function GoogleMap({loadGame, parks}) {
  const [map, setMap] = useState();
  const ref = useRef();

//contains map object styling and view on initial load
const mapOptions = {
  mapId: process.env.REACT_APP_GOOGLE_MAP_ID,
  center: { lat: 37.09, lng: -95.71 }, //where to start
    zoom: 4, //how much to initially zoom
    disableDefaultUI: true,
  }

 useEffect(() => {

      setMap(new window.google.maps.Map(ref.current, mapOptions))

  },[])

  return (
    <>
     <div ref={ref} style={{ height: "100%", width: '100%' }}/>
     {map && <ParkIcon map={map} parks={parks} google={window.google} loadGame={loadGame}/>}
    </>
  )
}

export default GoogleMap
