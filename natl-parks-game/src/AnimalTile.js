import { useEffect, useState } from 'react'

const AnimalTile = ({ img, name, fact, id, found, handleSelectAnimal }) => {

    const clickHandle = () => {
        handleSelectAnimal(name)
    }

    // useEffect(() => {
    //     console.log('render')
    // }, [isFound])

  return (
    <div className={'animal-tile'}>
        <h3 onClick={clickHandle}>{name}</h3>
        {/* <img gameid={id} src={img} alt={name}/> */}
        {found ? <p>fact</p> : null}
    </div>
  )
}

export default AnimalTile