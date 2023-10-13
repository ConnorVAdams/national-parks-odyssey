import { useState, useEffect } from 'react'
import AnimalTile from './AnimalTile'

const AnimalBoard = ({ animals }) => {
    
    const randomInt = Math.floor(Math.random() * (16 - 0) + 0)

    const duplicateAnimals = (animalArr) => {
            animals.map(animal => {
                const newAnimal = {...animal, id: animal.id + animals.length}
                animalArr.push(newAnimal)
        })
    }

    const shuffleDeck = (fullDeck) => {
        const newDeck = [...fullDeck]
        newDeck.map(card => {
            const [ cardOut ] = fullDeck.slice(randomInt, randomInt + 1)
    
        })
        return newDeck
    }

    const buildDeck = (animalArr) => {
        const deck = [...animalArr]
        duplicateAnimals(deck)
        shuffleDeck(deck)
        return deck
    }

    
    const playTiles = buildDeck(animals)
    console.log(playTiles)
    const animalDisplay = playTiles.map(animal => {
        return <AnimalTile key={animal.id} id={animal.id} {...animal} />
    })


    return (
    <div className='animal-board'>
        {/* {animalDisplay} */}
    </div>
    )
}

export default AnimalBoard