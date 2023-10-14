import { useState, useEffect } from 'react'
import AnimalTile from './AnimalTile'

const AnimalBoard = ({ animals, handleWin }) => {
    const [count, setCount] = useState(0)
    const [clickedName, setClickedName] = useState('')
    const [shuffledDeck, setShuffledDeck] = useState([])

    const duplicateCards = (arr) => {
        const duplicates = arr.map(card => ({ ...card, id: card.id + arr.length }))
        const combined = [...duplicates, ...arr]
        return combined
    }    

    const shuffleDeck = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
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
        setShuffledDeck(shuffleDeck(duplicateCards(animals)))
    }, [])

    useEffect(() => {
        document.querySelector('.animal-board').classList.remove('disabled')
    }, [count])

    useEffect(() => {
        if ((shuffledDeck.filter(card => !card.found)).length === 0) {
            const endTime = Date.now()
            handleWin(endTime, count)
        }
    }, [shuffledDeck])

    const animalDisplay = shuffledDeck.map(animal => {
        return <AnimalTile 
                    key={animal.id} 
                    {...animal} 
                    handleSelectAnimal={handleSelectAnimal}
                    clickedName={clickedName}
                    count={count}
                />
    })

    return (
    <div className={'animal-board'}>
        <h2>{}</h2>
        {animalDisplay}
    </div>
    )
}

export default AnimalBoard