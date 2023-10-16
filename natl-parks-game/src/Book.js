import { useState, useEffect } from 'react'
import Search from './Search'
import ParkList from './ParkList'
import ParkArticle from './ParkArticle'

const Book = () => {
  return (
    <>
      <Search />
      <ParkArticle />
      <ParkList />
    </>
  )
}

export default Book