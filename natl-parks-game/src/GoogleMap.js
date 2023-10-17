import React, { useState, useEffect, useRef } from 'react'
import { Wrapper } from "@googlemaps/react-wrapper"

function GoogleMap() {
  const [map, setMap] = useState();
  const ref = useRef();

  useEffect(() => {
    setMap(new window.google.maps.Map(ref.current))
  },[])

  return (
    <div ref={ref} className='map' style={{ height: "100%", width: '100%' }}>

    </div>
  )
}

export default GoogleMap
