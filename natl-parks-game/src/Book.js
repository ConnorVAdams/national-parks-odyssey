import { useState, useEffect } from 'react'
import Search from './Search'
import ParkList from './ParkList'
import ParkArticle from './ParkArticle'
import NavButtons from './NavButtons'

const URL = 'http://localhost:3000/parkObj'

const Book = () => {
  const [parks, setParks] = useState([])
  const [currentPark, setcurrentPark] = useState({})

  const fetchAllParks = () => {
    fetch(URL)
    .then(resp => resp.json())
    .then(data => setParks(data))
  }

  useEffect(() => {
    fetchAllParks()
  }, [])

  const displayPark = (parkObj) => {
    setcurrentPark(parkObj)
  }

  return (
    <>
      <div className='book'>
          <Search />
        <div className='book-bottom'>
          <ParkList displayPark={displayPark} parks={parks}/>
          <ParkArticle {...currentPark} />
        </div>
      </div>
    </>
  )
}

export default Book