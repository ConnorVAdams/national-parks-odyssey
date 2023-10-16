import { useState, useEffect } from 'react'
import Search from './Search'
import ParkList from './ParkList'
import ParkArticle from './ParkArticle'
import NavButtons from './NavButtons'

const Book = () => {
  return (
    <>
      <div className='book'>
        <Search />
        <ParkArticle />
        <ParkList />
      </div>
    </>
  )
}

export default Book