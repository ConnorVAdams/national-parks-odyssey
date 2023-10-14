import { useState, useEffect } from 'react'
import AnimalTile from './AnimalTile'

const AnimalBoard = ({ animals }) => {
    const [count, setCount] = useState(0)
    const [clickedName, setClickedName] = useState('')
    const [shuffledDeck, setShuffledDeck] = useState([])

    const duplicateCards = (arr) => {
        const duplicates = arr.map(card => ({ ...card, id: card.id + arr.length }))
        const combined = [...duplicates, ...arr]
        return combined
    }    

    const sliceMaker = (arr, n) => {
        let count = 0
        return arr.filter(el => {
            if (count < n) {
                count++
                return true
            } else {
                return false
            }
        })
    }

    const shuffleDeck = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Generate a random index between 0 and i.
        // Swap elements at i and j
        [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr
    }

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
        const newDeck = shuffleDeck(animals)

        const dupes = duplicateCards(newDeck)
        setShuffledDeck(shuffleDeck(dupes))
    }, [])

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