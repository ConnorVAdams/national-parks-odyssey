import React, { useState, useEffect, useRef} from 'react'
import { createRoot } from "react-dom/client"
import { Wrapper } from "@googlemaps/react-wrapper"
import './ParkIcon.css'

const ParkIcon = ({map, parks, google}) => {
  const Marker = ({map, children, position}) => {
    //need to reconcile dom with jsx/react
    const markerRef = useRef();
    const rootRef = useRef();

    //everytime the html passed to the marker changes
    useEffect(() => {
      if (!rootRef.current) { //if there is no value for rootRef, initialize
        const container = document.createElement('div')
        rootRef.current = createRoot(container)
        //need advanced marker
        markerRef.current = new google.maps.marker.AdvancedMarkerView({
          position,
          content: container
        })
      }
    }, [])

    useEffect(() => { //whenever the map changes, position changes or children changes (this is the div)
      rootRef.current.render(children)
      markerRef.current.position = position
      markerRef.current.map = map
    },[map, children, position])
  }
  return (
    <>
    {parks.map((park) => (
      <Marker key={park.id} map={map} position={park.coordinates}>
        <div>
          <h2>{park.name}</h2>
        </div>
      </Marker>
    ))}
    </>
  )
}

export default ParkIcon
