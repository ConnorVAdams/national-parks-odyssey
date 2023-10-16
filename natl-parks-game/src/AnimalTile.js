import { useEffect, useState } from 'react'

const AnimalTile = ({ img, name, fact, id, found, handleSelectAnimal, count }) => {
    //back variable to keep tiles revealed during each turn.
    const [back, setBack] = useState(!found)
    
    //Reveal tile onClick and passes clicked animal to <AnimalContainer /> for handling.
    const clickHandle = () => {
        setBack(!back)
        handleSelectAnimal(name)
    }

    //Return tiles to hidden after each turn.
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