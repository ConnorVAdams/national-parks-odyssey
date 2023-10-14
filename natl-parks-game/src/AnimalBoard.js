import { useState, useEffect } from 'react'
import AnimalTile from './AnimalTile'

const AnimalBoard = ({ animals }) => {
    const [count, setCount] = useState(0)
    const [clickedName, setClickedName] = useState('')
    const [shuffledDeck, setShuffledDeck] = useState([])

    const easy = 8
    const medium = 12
    const hard = 16

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

    const handleSelectAnimal = (name) => {
        if (count % 2 !== 0 && name === clickedName){
            console.log('Good job!')
            setClickedName('')
            setCount(count => count + 1)
            setShuffledDeck(current => current.map(animal => animal.name === name ? { ...animal, found: true } : animal))
        } else if (count % 2 !== 0) {
            document.querySelector('.animal-board').classList.add('disabled')
            setTimeout(() => {
                setClickedName('')
                setCount(count => count + 1)
                }, 1400)
            console.log('Better luck next time.')
        } else {
            setClickedName(name)
            setCount(count => count + 1)
        }
    }

    useEffect(() => {
            document.querySelector('.animal-board').classList.remove('disabled')
    }, [count])

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
    <div id={'animal-board'} className={'animal-board'}>
        {animalDisplay}
    </div>
    )
}

export default AnimalBoard