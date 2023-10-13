import { useState, useEffect } from 'react'
import AnimalTile from './AnimalTile'

const AnimalBoard = ({ animals }) => {
    
    const buildDeck = (animalArr) => {
        const randomInt = Math.floor(Math.random() * (16 - 0) + 0)

        const duplicateCards = ([...animalArr]) => {
                animals.map(animal => {
                    const newAnimal = {...animal, id: animal.id + animals.length}
                    animalArr.push(newAnimal)
            })
            return animalArr
        }

        const shuffleDeck = (fullDeck) => {
            for (let i = fullDeck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Generate a random index between 0 and i.
            // Swap elements at i and j
            [fullDeck[i], fullDeck[j]] = [fullDeck[j], fullDeck[i]];
            }
            return fullDeck
        }

        return shuffleDeck(duplicateCards(animalArr))
    }

    const animalDisplay = buildDeck(animals).map(animal => {
        return <AnimalTile key={animal.id} id={animal.id} {...animal} />
    })


    return (
    <div className='animal-board'>
        {animalDisplay}
    </div>
    )
}

export default AnimalBoard