import { useState, useEffect } from 'react'
import Search from './Search'
import ParkList from './ParkList'
import ParkArticle from './ParkArticle'
import NavButtons from './NavButtons'

const Book = () => {
  return (
    <>
      <div className='book'>
        <div className='book-left'>
          <Search />
          <ParkList />
        </div>
        <div className='book-right'>
          <ParkArticle />
        </div>
      </div>
    </>
  )
}

export default Book