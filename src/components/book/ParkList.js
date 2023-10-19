import ParkLi from "./ParkLi"

const ParkList = ({ parks, displayPark, handleFavorite, searchObj }) => {
  const { search, list, sort, state, traffic, wildlife, activity } = searchObj

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
    if (state && state !== 'all') {
      return (park.location.some(loc => loc === state))
    } else {
      return finalParks
    }
  })

  const filteredByWildlife = filteredByState.filter(park => {
    if (wildlife && wildlife !== 'all') {
      return (park.wildlife.some(animal => animal === wildlife))
    } else {
      return finalParks
    }
  })

  const filteredByActivity = filteredByWildlife.filter(park => {
    if (activity === 'horseback riding' && activity !== 'all') {
      const regex = [/horse/i]
      return (regex.some(regex => regex.test(park.description)))
    } else if (activity === 'archaeology'){
      const regex = [/petroglyph/i, /history/i, /native american/i, /artifact/i]
      return (regex.some(regex => regex.test(park.description)))
    } else if (activity === 'hiking'){
      const regex = [/trail/i, /hiking/i, /hike/i]
      return (regex.some(regex => regex.test(park.description)))
    } else if (activity === 'water sports'){
      const regex = [/lake/i, /boat/i, /ocean/i, /sea/i, /swim/i]
      return (regex.some(regex => regex.test(park.description)))
    } else if (activity === 'rock climbing'){
      const regex = [/climb/i, /rock climb/i, /mountaineering/i]
      return (regex.some(regex => regex.test(park.description)))
    } else if (activity === 'history'){
      const regex = [/history/i, /museum/i, /civil war/i]
      return (regex.some(regex => regex.test(park.description)))
    } else if (activity === 'scenic drives'){
      const regex = [/road/i, /drive/i]
      return (regex.some(regex => regex.test(park.description)))
    } else {
      return finalParks
    }
  })

  const parksDisplay = filteredByActivity.map(park => {
    return <ParkLi handleFavorite={handleFavorite} key={park.id} park={park} displayPark={displayPark}/>
  })

  return (
    <div className='park-list'>
      {parksDisplay}
    </div>
  )
}

export default ParkList