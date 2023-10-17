import { useOutletContext } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Search from './Search'
import ParkList from './ParkList'
import ParkArticle from './ParkArticle'
import NavButtons from '../nav/NavButtons.js'

const Book = () => {
  const { parks }= useOutletContext()
  // const [parks, setParks] = useState([])
  // const [currentPark, setcurrentPark] = useState({})

  // const fetchAllParks = () => {
  //   fetch(URL)
  //   .then(resp => resp.json())
  //   .then(data => setParks(data))
  // }

  // useEffect(() => {
  //   fetchAllParks()
  // }, [])

  // const displayPark = (parkObj) => {
  //   setcurrentPark(parkObj)
  // }

  return (
    <>
      <NavButtons />
      <div className='book'>
          <Search parks={parks}/>
        <div className='book-bottom'>
          <ParkList parks={parks}/>
          <ParkArticle  />
        </div>
      </div>
    </>
  )
}

export default Book