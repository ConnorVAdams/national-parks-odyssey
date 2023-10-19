import ParkLi from "./ParkLi"


const ParkList = ({ parks, displayPark, handleFavorite, searchObj }) => {
    
    const parksDisplay = parks.map(park => {
        return <ParkLi handleFavorite={handleFavorite} key={park.id} park={park} displayPark={displayPark}/>
    })

  return (
    <div className='park-list'>
      {parksDisplay}
    </div>
  )
}

export default ParkList