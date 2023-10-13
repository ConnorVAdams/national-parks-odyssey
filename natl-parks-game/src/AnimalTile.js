import { useState } from 'react'

const AnimalTile = ({ img, name, id }) => {
    

  return (
    <div>
        <img gameid={id} src={img} alt={name}/>
    </div>
  )
}

export default AnimalTile