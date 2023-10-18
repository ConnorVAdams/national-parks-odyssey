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
          content: container,
          collisionBehavior: "OPTIONAL_AND_HIDES_LOWER_PRIORITY"
        })
      }
    }, [])

    useEffect(() => { //whenever the map changes, position changes or children changes (this is the div)
      rootRef.current.render(children)
      markerRef.current.position = position
      markerRef.current.map = map

      //add listener
      const listener = markerRef.current.addListener("click", onClick)

      return () => { //cleanup function to remove all the events
        listener.remove()
      }
    },[map, children, position])
  }
  return (
    <>
    {parks.map((park) => (
      <Marker key={park.id} map={map} position={park.coordinates} onClick={loadGame}>
        <div >
          <h2 className="marker">
            <i className="fa fa-tree tree-one"></i>
            <i className="fa fa-tree tree-two"></i>
            {park.name}
            <i className="fa fa-tree tree-three"></i>
            <i className="fa fa-tree tree-four"></i>
            </h2>
        </div>
      </Marker>
    ))}
    </>
  )
}

export default ParkIcon
