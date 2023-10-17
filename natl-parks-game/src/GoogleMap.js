import React, { useState, useEffect, useRef } from 'react'
import { Wrapper } from "@googlemaps/react-wrapper"

function GoogleMap() {
  const [map, setMap] = useState();
  const ref = useRef();

//contains map object styling and view on initial load
  const mapOptions = {
    mapId: 'bd65f4eb7088841f',
    center: { lat: 37.09, lng: -95.71 }, //where to start
    zoom: 4, //how much to initially zoom
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
