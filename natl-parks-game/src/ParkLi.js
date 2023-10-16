const ParkLi = ({ id, name, year, location, link, image, gameWon, displayPark }) => {
  
  const handleClick = (id) => {
    console.log(id)
    fetch(`http://localhost:3000/parkObj/${id}`)
    .then(resp => resp.json())
    .then(data => displayPark(data))
  }

  return (
    <div className='park-li'>
      <div className='park-li-img'>
        <img src={image} alt={name} onClick={() => handleClick(id)}></img>
          <button>Favorite</button>
          {gameWon ? <span>★ Card Owned</span> : <button>Play Game</button> }
      </div>
      <div className='park-li-stats'>
        <h3>{name}</h3>
        <ul>
          <li>Est. {year}</li>
          <li>{location}</li>
          <li><a href={link} target='_blank'>NPS Website</a></li>
        </ul>
      </div>
    </div>
  )
}

export default ParkLi