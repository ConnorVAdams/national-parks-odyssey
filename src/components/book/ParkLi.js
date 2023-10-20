import { BiSolidSpreadsheet as DisplayIcon }  from 'react-icons/bi'
import { BiSolidJoystickAlt as PlayIcon }  from 'react-icons/bi'
import { useEffect, useState } from 'react'

const ParkLi = ({ handleFavorite, park, displayPark }) => {
  const { id, name, year, location, coordinates, image, attractions, link, visitors, wildlife, gameWon, description, favorited } = park
  const [isFavorited, setIsFavorited] = useState(null)

  const handleClick = () => {
    displayPark(id)
  }

  const handleFave = () => {
    handleFavorite(id, isFavorited)
    setIsFavorited(current => !current)
  }

  useEffect(() => {
    setIsFavorited(favorited)
  }, [])

  return (
    <div className='park-li'>
      <div className='park-info'>
        <img src={image} alt={name} onClick={() => handleClick(id)} />
        <div className='park-li-stats'>
          <h3>{name}</h3>
          <ul>
            <li>Est. {year}</li>
            <li>{location}</li>
            <li><a href={link} target='_blank'>NPS Website</a></li>
          </ul>
        </div>
      </div>
      <div className='icon-container'>
        <div className='single-icon-container'>
          <DisplayIcon className='react-icon display-icon' onClick={() => handleClick(id)}/>
          <p>Details</p>
        </div>   
        {!gameWon ? 
          <div className='single-icon-container'>
            <PlayIcon className='react-icon play-icon'/> <p>Play Game</p>
          </div> : null }
        </div>
    </div>
  )
}

export default ParkLi