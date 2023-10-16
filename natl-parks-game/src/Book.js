import { useState, useEffect } from 'react'
import Search from './Search'
import ParkList from './ParkList'
import ParkArticle from './ParkArticle'
import NavButtons from './NavButtons'

const URL = 'http://localhost:3000/parkObj'

const Book = () => {
  const [parks, setParks] = useState([])

  const fetchAllParks = () => {
    fetch(URL)
    .then(resp => resp.json())
    .then(data => setParks(data))
  }

  useEffect(() => {
    fetchAllParks()
  }, [])

  return (
    <>
      <div className='book'>
          <Search />
        <div className='book-bottom'>
          <ParkList parks={parks}/>
          <ParkArticle />
        </div>
      </div>
    </>
  )
}

export default Book