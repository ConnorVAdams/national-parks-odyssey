import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import MemoryTile from './MemoryTile'
import './MemoryGame.css'

const animals = [
    {
        id: 1,
        name: 'Black Bear',
        img: 'https://i.imgur.com/gAKDjey.jpg',
        fact: 'Black bears are the most common bear in North America.',
        found: false
    },
    {
        id: 2,
        name: 'Grizzly Bear',
        img: 'https://i.imgur.com/S4qoH7c.jpg',
        fact: 'Grizzly bears are the largest bears in North America.',
        found: false
    },
    {
        id: 3,
        name: 'Pine Marten',
        img: 'https://i.imgur.com/6S0u6Zf.jpg',
        fact: 'Pine martens are small, agile members of the weasel family.',
        found: false
    },
    {
        id: 4,
        name: 'American Badger',
        img: 'https://i.imgur.com/isUCGY1.jpg',
        fact: 'American badgers are known for their powerful digging abilities.',
        found: false
    },
    {
        id: 5,
        name: 'Alaska Red Fox',
        img: 'https://i.imgur.com/5nFXydc.jpg',
        fact: 'Alaska red foxes are the largest subspecies of red fox.',
        found: false
    },
    {
        id: 6,
        name: 'Golden-mantled Marmot',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Marmota_flaviventris_standing_S_of_Donahue_Pass.jpg/220px-Marmota_flaviventris_standing_S_of_Donahue_Pass.jpg',
        fact: 'Golden-mantled marmots are known for their whistling calls.',
    },
    {
        id: 7,
        name: 'Coyote',
        img: 'https://i.imgur.com/EHDpREh.png',
        fact: 'Coyotes are highly adaptable animals and can be found in a variety of habitats.',
        found: false
    },
    {
        id: 8,
        name: 'Mountain Lion',
        img: 'https://i.imgur.com/PuaNTyi.png',
        fact: 'Mountain lions are the largest cats in North America.',
        found: false
    },
    {
        id: 9,
        name: 'Mule Deer',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Mule_buck_elk_creek_m_myatt_%285489214303%29.jpg/1024px-Mule_buck_elk_creek_m_myatt_%285489214303%29.jpg',
        fact: `Each spring, a buck's antlers start to regrow almost immediately after the old antlers are shed.`,

    },
    {
        id: 10,
        name: 'Fisher',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Fisher_cat_tree.jpg/640px-Fisher_cat_tree.jpg',
        fact: 'Fishers are found in a variety of habitats.',
    },
    {
        id: 11,
        name: 'Mantled Ground Squirrel',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Golden-mantled_ground_squirrel-8241.jpg/640px-Golden-mantled_ground_squirrel-8241.jpg',
        fact: 'Mantled ground squirrels are the largest ground squirrels in North America.',
    },
    {
        id: 12,
        name: 'Sierra Golden-mantled Ground Squirrel',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Golden-Mantled_Ground_Squirrel%2C_Mount_Rainier%2C_July_2006.jpg/640px-Golden-Mantled_Ground_Squirrel%2C_Mount_Rainier%2C_July_2006.jpg',
        fact: 'Sierra golden-mantled ground squirrels are found at higher elevations than other ground squirrels.',
    },
    {
        id: 13,
        name: 'Nushagak Ground Squirrel',
        img: 'https://www.nps.gov/parkhistory/online_books/pwro/wildlife_portfolio/images/fig14.jpg',
        fact: 'Nushagak ground squirrels are the only ground squirrels found on Kodiak Island.',
    },
    {
        id: 14,
        name: 'Chipmunk',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Tamias_minimus.jpg/640px-Tamias_minimus.jpg',
        fact: 'Chipmunks can climb trees and swim.',
    },
    {
        id: 15,
        name: 'Northern Red Squirrel',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Red_Squirrel_on_Brownsea_Island_%285332865944%29.jpg/640px-Red_Squirrel_on_Brownsea_Island_%285332865944%29.jpg',
        fact: 'Northern red squirrels are known for their aggressive behavior and their loud calls, especially when they are defending their territory.',
    },
    {
        id: 16,
        name: 'Sierra Chickaree',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Douglas_Squirrel_DSC2803zz.jpg/640px-Douglas_Squirrel_DSC2803zz.jpg',
        fact: 'Sierra chickarees are found in the coniferous forests of the Sierra Nevada mountains and are known for their loud calls.',
    }
]

const MemoryGame = () => {
    const { name, handleWin, id } = useOutletContext()
    const [startTime, setStartTime] = useState(Date.now())

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
        if (animals) {
        setShuffledDeck(shuffleDeck(duplicateCards(randomSlice(animals, easy))))
        }
    }, [animals])

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
        if (((shuffledDeck.filter(card => !card.found)).length === 0) && (shuffledDeck[1] !== undefined)) {
            const endTime = Date.now()
            handleWin(id, (endTime - startTime))
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
