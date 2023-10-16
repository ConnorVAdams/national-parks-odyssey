import ParkLi from "./ParkLi"


const ParkList = ({ parks, displayPark }) => {
    
    const parksDisplay = parks.map(park => {
        return <ParkLi key={park.id} {...park} displayPark={displayPark}/>
    })

  return (
    <div className='park-list'>
      {parksDisplay}
    </div>
  )
}

export default ParkList