import ParkLi from "./ParkLi"
import { useEffect, useState } from 'react'

const ParkList = ({ parks, displayPark, handleFavorite, searchObj }) => {
  const { search, list, sort, state, traffic, wildlife, activities } = searchObj
  // const { state, traffic, wildlife, activities} = searchObj.filters

  const listParks = () => {
    if (list === 'Favorites') {
          return parks.filter(park => park.favorited)
        } else if (list === 'Cards Collected') {
          return parks.filter(park => park.gameWon)
        } else if (list === 'Cards Remaining') {
          return parks.filter(park => !park.gameWon)
        } else if (list === 'All') {
          return parks
        }
    return parks
  }

  const listedParks = listParks()

  const sortParks = (arr) => {
    if (sort === 'Visitors') {
          return arr.sort((a, b) => {
            const numA = a.visitors
            const numB = b.visitors
            if (numA < numB) {
              return -1
            } 
            if (numA > numB) {
              return 1
            }})
          } else if (sort === 'Oldest-Newest') {
            return [...arr].sort((a, b) => {
            const numA = a.year
            const numB = b.year
            if (numA < numB) {
              return -1
            } 
            if (numA > numB) {
              return 1
            }})
          } else if (sort === 'Alphabetically') {
            return [...arr].sort((a, b) => {
              const numA = a.name
              const numB = b.name
              if (numA < numB) {
                return -1
              } 
              if (numA > numB) {
                return 1
              }})
          }
  return arr
  }

  const finalParks = sortParks(listedParks).filter(park => new RegExp(search, 'i').test(park.name))

  const filteredByState = finalParks.filter(park => {
    if (state) {
    return (park.location.some(loc => loc === state))
    } else {
      return finalParks
    }
  })
    // state.includes(park.location))
  // }
  const parksDisplay = filteredByState.map(park => {
    return <ParkLi handleFavorite={handleFavorite} key={park.id} park={park} displayPark={displayPark}/>
  })
  


  console.log(filteredByState)

  return (
    <div className='park-list'>
      {parksDisplay}
    </div>
  )
}

export default ParkList