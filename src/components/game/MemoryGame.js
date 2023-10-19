import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import MemoryTile from './MemoryTile'
import './MemoryGame.css'

import animals from './animalData.js'

const MemoryGame = () => {
    const { handleWin, wildlife } = useOutletContext()
    //count variable keeps track of number of turns player has taken, with an odd numbered count being the middle of a turn and an even number being the end of a turn.
    const [count, setCount] = useState(0)
    //clickedName variable holds the value of the first tile clicked every turn.
    const [clickedName, setClickedName] = useState('')
    //shuffledDeck variable creates a randomized deck of tiles on initial render
    const [shuffledDeck, setShuffledDeck] = useState([])

    //Recieves animal objects and duplicates the object with a new id.
    const duplicateCards = (arr) => {
        const duplicates = arr.map(card => ({ ...card, id: card.id + arr.length }))
        const combined = [...duplicates, ...arr]
        // debugger
        return combined
    }    

    //Receives duplicated collection and randomly shuffles it.
    const shuffleDeck = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
        }
        // debugger
        return arr
    }

    const easy = 8
    const med = 12
    const hard = 16
    
    const randomSlice = (arr, difficulty) => {
        const gameDeck = arr.slice(0, difficulty)
        // debugger
        return gameDeck
    }

    //Callback for onClick on animal tile.
    const handleSelectAnimal = (name) => {
        //TODO Refactor first two ifs into a single if (count % 2 !== 0) statement?
        //If it's end of turn, check most recently clicked name against value stored in clickedName.
        if (count % 2 !== 0 && name === clickedName){
            //If it's a match, reset clickedName, find matching animal objects, change found property to true, and re-render.
            console.log('Good job!')
            setClickedName('')
            setCount(count => count + 1)
            setShuffledDeck(current => current.map(animal => animal.name === name ? { ...animal, found: true } : animal))
        } else if (count % 2 !== 0) {
            //If it's not a match, give user 1.4 secs to digest both animals, but disable pointer events so user cannot reveal more tiles, then rest clickedName and re-render.
            //TODO Fix this query selection to be more React
            document.querySelector('.animal-board').classList.add('disabled')
            setTimeout(() => {
                setClickedName('')
                setCount(count => count + 1)
                }, 1400)
            console.log('Better luck next time.')
        } else {
            //If it's mid-turn, store first clicked tile in clickedName and re-render.
            setClickedName(name)
            setCount(count => count + 1)
        }
        //increment count by 1 in all cases.
    }

    //Create unique deck for game on first render.
    useEffect(() => {
        setShuffledDeck(shuffleDeck(duplicateCards(randomSlice(animals, easy))))
    }, [])

    //Reset
    const reset = () => {
        setShuffledDeck(shuffleDeck(duplicateCards(randomSlice(animals, easy))))
    }

    //Re-enable pointer events after every turn.
    useEffect(() => {
        document.querySelector('.animal-board').classList.remove('disabled')
    }, [count])

    //Initiate handleWin() callback if all tiles in deck have been found.
    useEffect(() => {
        if ((shuffledDeck.filter(card => !card.found)).length === 0) {
            const endTime = Date.now()
            handleWin(endTime, count)
        }
    }, [shuffledDeck])
    
    //Render <AnimalTile /> components for re-use on the board.
    const animalDisplay = shuffledDeck.map(animal => {
        return <MemoryTile 
                    key={animal.id} 
                    {...animal} 
                    handleSelectAnimal={handleSelectAnimal}
                    clickedName={clickedName}
                    count={count}
                />
    })

    return (
    <>
        <button onClick={reset}>Retry</button>
        <div className={'animal-board'}> 
            {animalDisplay}
        </div>
    </>
    )
}

export default MemoryGame