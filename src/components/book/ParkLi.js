import { BiSolidSpreadsheet as DisplayIcon }  from 'react-icons/bi'

const ParkLi = ({ handleFavorite, park, displayPark }) => {
  const { id, name, year, location, coordinates, image, attractions, link, visitors, wildlife, gameWon, description, favorited } = park

  const handleClick = () => {
    displayPark(id)
  }

  return (
    <div className='park-li'>
      <div className='park-info'>
        <img src={image} alt={name} onClick={() => handleClick(id)} />
        <div className='park-li-stats'>
          <h3>{name}</h3>
          <ul>
            <li>Est. {year}</li>
            <div className='bottom-row'>
              <li>{location}</li>
              <div className='button-container'>
                {!gameWon ? 
                <button onClick={() => handleClick(id)}>Play Game</button> : null }
                <button onClick={() => handleClick(id)}>Details</button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ParkLi