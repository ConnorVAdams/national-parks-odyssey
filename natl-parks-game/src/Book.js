import { useState, useEffect } from 'react'
import Search from './Search'
import ParkList from './ParkList'
import ParkArticle from './ParkArticle'
import NavButtons from './NavButtons'

const Book = () => {
  return (
    <>
      <NavButtons />
      <Search />
      <ParkArticle />
      <ParkList />
    </>
  )
}

export default Book