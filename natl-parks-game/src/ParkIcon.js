import React, { useState, useEffect, useRef} from 'react'

const ParkIcon = ({map, parks}) => {
  const Marker = ({map, children, position}) => {
    //need to reconcile dom with jsx/react
    const markerRef = useRef();
    const rootRef = useRef();

    //everytime the html passed to the marker changes
    useEffect(() => {
      if (!rootRef.current) { //if there is no value for rootRef, initialize
        const container = document.createElement('div')
      }
    }, [])
  }
  return (
    <>
    {parks.map((park) => (
      <Marker key={park.id} map={map} position={map.coordinates}>
        <div>
          <h2>{park.name}</h2>
        </div>
      </Marker>
    ))}
    </>
  )
}

export default ParkIcon
