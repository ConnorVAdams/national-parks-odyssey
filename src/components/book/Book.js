import { useOutletContext } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Search from './Search'
import ParkList from './ParkList'
import ParkArticle from './ParkArticle'
import NavButtons from '../nav/NavButtons.js'

const defaultObj = {
  search: '',
  list: '',
  sort: '',
  state: '',
  traffic: '',
  wildlife: '',
  activities: '',
}

const Book = () => {
  const { parks }= useOutletContext()
  const [currentPark, setCurrentPark] = useState([])
  const [searchObj, setSearchObj] = useState(defaultObj)

  const handleSearchChange = (name, value) => {
    setSearchObj({...searchObj,
      [name]: value
    })
  }

  // const handleSelectChange = (name, value) => {
  //   console.log(name, value)
  //   setSearchObj({...searchObj,
  //     filters: {
  //       ...searchObj.filters,
  //       state: value
  //     }
  //   })
  // }

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
          <Search parks={parks} handleSearchChange={handleSearchChange} searchObj={searchObj}/>
        <div className='book-bottom'>
          <ParkList searchObj={searchObj} handleFavorite={handleFavorite} parks={parks} displayPark={displayPark} />
          <ParkArticle handleFavorite={handleFavorite} displayPark={displayPark} park={currentPark} />
        </div>
      </div>
    </>
  )
}

export default Book