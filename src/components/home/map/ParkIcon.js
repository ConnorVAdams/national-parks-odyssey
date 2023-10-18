import React, { useState, useEffect, useRef} from 'react'
import { createRoot } from "react-dom/client"
import { Wrapper } from "@googlemaps/react-wrapper"
import './ParkIcon.css'

const ParkIcon = ({map, parks, google, loadGame}) => {
  const Marker = ({map, children, position, onClick}) => {
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
      const listener = markerRef.current.addListener("click", onClick)
      return () => listener.remove() //cleanup function to remove all the events
    },[map, children, position])
  }
  return (
    <>
    {parks.map((park) => (
      <Marker key={park.id} map={map} position={park.coordinates} onClick={loadGame}>
        <div>
          <h2 className="marker">
            <i className="fa fa-tree tree-one"></i>
            <i className="fa fa-tree tree-two"></i>
            <i className="fa fa-tree tree-three"></i>
            <i className="fa fa-tree tree-four"></i>
            <i className="fa fa-tree tree-five"></i>
            {park.name}</h2>
        </div>
      </Marker>
    ))}
    </>
  )
}

export default ParkIcon
