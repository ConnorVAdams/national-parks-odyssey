import { Wrapper } from "@googlemaps/react-wrapper"
import React, { useState, useEffect, useRef } from 'react'
import ParkIcon from "../home/map/ParkIcon";

function BookMap({coordinates}) {
  const [map, setMap] = useState();
  const ref = useRef();

  const mapOptions = {
    mapId: process.env.REACT_APP_GOOGLE_MAP_ID,
    center: coordinates, //where to start
    zoom: 4, //how much to initially zoom
    disableDefaultUI: true,
  }

  useEffect(() => {

    setMap(new window.google.maps.Map(ref.current, mapOptions))

  }, [])
  console.log(map)
  return (
    <>
    <div ref={ref} style={{ height: "100%", width: '100%' }} />
      {/* {{map}} */}
    </>

  )
}

export default BookMap
