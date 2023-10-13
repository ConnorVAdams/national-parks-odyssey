import { useEffect, useState } from 'react'

const AnimalTile = ({ img, name, fact, id, found, handleSelectAnimal, clickedName}) => {
    const [isFound, setIsFound] = useState(found)

    const clickHandle = () => {
        if (name === clickedName) {
            setIsFound(!isFound)
            handleSelectAnimal(name)
        } else {
            handleSelectAnimal(name)
        }
    }

    useEffect(() => {
        console.log('render')
    }, [isFound])

  return (
    <div className={'animal-tile'}>
        <h3 onClick={!isFound ? clickHandle : null }>{name}</h3>
        {/* <img gameid={id} src={img} alt={name}/> */}
        {isFound ? <p>fact</p> : null}
    </div>
  )
}

export default AnimalTile