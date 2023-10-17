import React, { useState, useEffect, useRef } from 'react'
import { Wrapper } from "@googlemaps/react-wrapper"
import ParkIcon from './ParkIcon';
import parkObj from './TestData';

function GoogleMap() {
  const [map, setMap] = useState();
  const ref = useRef();

//contains map object styling and view on initial load
const mapOptions = {
    mapId: 'bd65f4eb7088841f',
  center: { lat: 38.73, lng: -109.57 }, //where to start
    zoom: 9, //how much to initially zoom
    disableDefaultUI: true,
  }

 useEffect(() => {
    setMap(new window.google.maps.Map(ref.current, mapOptions))
  },[])

  return (
    <>
     <div ref={ref} className='map' style={{ height: "100%", width: '100%' }}/>
     {map && <ParkIcon map={map} parks={parkObj} google={window.google}/>}
    </>
  )
}

export default GoogleMap


// { lat: 37.09, lng: -95.71 }
