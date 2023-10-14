import { useState, useEffect } from 'react'
import AnimalTile from './AnimalTile'

const AnimalBoard = ({ animals }) => {
    const [clickedName, setClickedName] = useState('')
    const [shuffledDeck, setShuffledDeck] = useState([])

    useEffect(() => {
        const duplicateCards = ([...animals]) => {
                animals.map(animal => {
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


    const handleSelectAnimal = (name) => {
        if (name === clickedName) {
            setShuffledDeck(current => current.map(card => {
                if (card.name === name) {
                    return { ...card, found: true }
                } else {
                    return card
                }
            }))
        }
        setClickedName(name)
    }

    const animalDisplay = shuffledDeck.map(animal => {
        return <AnimalTile 
                    key={animal.id} 
                    id={animal.id} 
                    {...animal} 
                    handleSelectAnimal={handleSelectAnimal}
                    clickedName={clickedName}
                />
    })

    return (
    <div className='animal-board'>
        {animalDisplay}
    </div>
    )
}

export default AnimalBoard