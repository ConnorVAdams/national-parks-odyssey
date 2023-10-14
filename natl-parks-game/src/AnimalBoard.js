import { useState, useEffect } from 'react'
import AnimalTile from './AnimalTile'

const AnimalBoard = ({ animals }) => {
    const [count, setCount] = useState(0)
    const [clickedName, setClickedName] = useState('')
    const [shuffledDeck, setShuffledDeck] = useState([])

    useEffect(() => {
        const duplicateCards = ([...animals]) => {
                animals.forEach(animal => {
                    const newAnimal = {...animal, id: animal.id + animals.length}
                    animals.push(newAnimal)
            })
            return animals
        }

        const shuffleDeck = (fullDeck) => {
            for (let i = fullDeck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Generate a random index between 0 and i.
            // Swap elements at i and j
            [fullDeck[i], fullDeck[j]] = [fullDeck[j], fullDeck[i]];
            }
            return fullDeck
        }
        setShuffledDeck(shuffleDeck(duplicateCards(animals)))
    }, [])

    useEffect(() => {
        if (count % 2 === 0) {
            // console.log(`useEffect1 - Count is ${count}`)
            // setClickedName('')
            // console.log(`useEffect2 - Count is ${count}`)
        }
    }, [count])

    const handleSelectAnimal = (name) => {
        console.log(clickedName, name)
        if (count % 2 === 0 && name === clickedName){
            console.log('Good job!')
            setClickedName('')
            setCount(count => count + 1)
        } else {
            console.log('Better luck next time.')
            setClickedName(name)
            setCount(count => count + 1)
        }
    }

    

    const animalDisplay = shuffledDeck.map(animal => {
        return <AnimalTile 
                    key={animal.id} 
                    id={animal.id} 
                    {...animal} 
                    handleSelectAnimal={handleSelectAnimal}
                    clickedName={clickedName}
                    count={count}
                />
    })

    return (
    <div className='animal-board'>
        {animalDisplay}
    </div>
    )
}

export default AnimalBoard