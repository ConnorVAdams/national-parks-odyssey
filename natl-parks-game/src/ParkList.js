import ParkLi from "./ParkLi"


const ParkList = ({ parks }) => {
    
    // const ParksDisplay = parks.map(park => {
    //     return <ParkLi key={park.id} id={park.id} {...park}/>
    // })

  return (
    <div className='park-list'>
      <ParkLi />
    </div>
  )
}

export default ParkList