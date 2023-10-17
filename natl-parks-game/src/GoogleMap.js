import React, { useState, useEffect, useRef } from 'react'
import { Wrapper } from "@googlemaps/react-wrapper"

function GoogleMap() {
  const [map, setMap] = useState();
  const ref = useRef();

//contains map object styling and view on initial load
  const mapOptions = {
    mapId: process.env.NEXT_PUBLIC_GOOGLE_MAP_ID,
    center: { lat: 37.09, lng: 95.71 },
    zoom: 10,
    disableDefaultUI: true,
  }
 useEffect(() => {
    setMap(new window.google.maps.Map(ref.current, mapOptions))
  },[])
  return (
    <div ref={ref} className='map' style={{ height: "100%", width: '100%' }}>

    </div>
  )
}

export default GoogleMap
