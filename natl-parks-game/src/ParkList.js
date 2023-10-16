import ParkLi from "./ParkLi"


const ParkList = ({ parks }) => {
    
    const parksDisplay = parks.map(park => {
        return <ParkLi key={park.id} id={park.id} {...park}/>
    })

  return (
    <div className='park-list'>
      {parksDisplay}
    </div>
  )
}

export default ParkList