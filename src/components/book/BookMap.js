import { Wrapper, Marker } from "@googlemaps/react-wrapper"
import React, { useState, useEffect, useRef } from 'react'
import ParkIcon from "../home/map/ParkIcon";

function BookMap({coordinates}) {
  const [map, setMap] = useState();
  const ref = useRef();

  const mapOptions = {
    mapId: process.env.REACT_APP_GOOGLE_MAP_ID,
    center: coordinates, //where to start
    zoom: 9, //how much to initially zoom
    disableDefaultUI: true,
  }

  useEffect(() => {

    setMap(new window.google.maps.Map(ref.current, mapOptions))

  }, [coordinates])

  useEffect(() => {

    const marker = new window.google.maps.Marker({
      position: coordinates,
      map: map,
      title: "Marker",
      icon: {
        url: "https://cdn-icons-png.flaticon.com/512/2220/2220061.png",
        scaledSize: new window.google.maps.Size(32, 32)
      },
    })
  }, [map])


  return (
    <>
    <div ref={ref} style={{ height: "100%", width: '100%' }} />
    </>

  )
}

export default BookMap
