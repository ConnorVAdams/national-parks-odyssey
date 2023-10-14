import { useEffect, useState } from 'react'

const AnimalTile = ({ img, name, fact, id, found, handleSelectAnimal, count }) => {
    const [back, setBack] = useState(!found)
    
    const clickHandle = () => {
        setBack(!back)
        handleSelectAnimal(name)
    }

    useEffect(() => {
        if (count % 2 === 0 && !found) {
            setBack(true)
        }
    }, [count])

  return (
    <div 
        className={`animal-tile ${back ? 'tile-back ' : 'disabled' }`} 
        onClick={clickHandle}
    >
        <>
        {back ? null : <img src={img} alt={img} />}
        {found ? <p>{fact}</p> : null}
        </>
    </div>
  )
}

export default AnimalTile