import { useOutletContext } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Search from './Search'
import ParkList from './ParkList'
import ParkArticle from './ParkArticle'
import NavButtons from '../nav/NavButtons.js'

const Book = () => {
  const { parks }= useOutletContext()
  const [currentPark, setCurrentPark] = useState([])

  const displayPark = (id) => {
    fetch(`http://localhost:3000/parkObj/${id}`)
    .then(resp => resp.json())
    .then(data => setCurrentPark(data)) 
  }

  useEffect(() => {
    fetch(`http://localhost:3000/parkObj/1`)
    .then(resp => resp.json())
    .then(data => setCurrentPark(data)) 
  }, [])

  const handleFavorite = (id, faved) => {
    fetch(`http://localhost:3000/parkObj/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        favorited: !faved
      })
    })
    .then(resp => resp.json())
    .then(data => setCurrentPark(data))
  }

  return (
    <>
      <NavButtons />
      <div className='book'>
          <Search parks={parks}/>
        <div className='book-bottom'>
          <ParkList handleFavorite={handleFavorite} parks={parks} displayPark={displayPark} />
          <ParkArticle handleFavorite={handleFavorite} displayPark={displayPark} park={currentPark} />
        </div>
      </div>
    </>
  )
}

export default Book