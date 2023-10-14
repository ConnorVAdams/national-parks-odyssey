import { useState } from 'react'

const AnimalTile = ({ img, name, fact, id, found, handleSelectAnimal, count }) => {
    const [back, setBack] = useState(true)
    const clickHandle = () => {
        setBack(!back)
        handleSelectAnimal(name)
    }

  return (
    <div onClick={found ? null : clickHandle} className={'animal-tile'}>
        {back ? (<h1>Back</h1>) : (<img src={img} alt={img} />)}
        {/* {found ? (
            <>
                <h3>{name}</h3>
                <p>fact</p>
            </>
        ) : (

        ) */}
    </div>
  )
}

export default AnimalTile