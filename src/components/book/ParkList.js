import ParkLi from "./ParkLi"


const ParkList = ({ parks, displayPark, handleFavorite }) => {
    
    const parksDisplay = parks.map(park => {
        return <ParkLi handleFavorite={handleFavorite} key={park.id} {...park} displayPark={displayPark}/>
    })

  return (
    <div className='park-list'>
      {parksDisplay}
    </div>
  )
}

export default ParkList