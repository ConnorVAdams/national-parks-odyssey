import { BiSolidSpreadsheet as DisplayIcon }  from 'react-icons/bi'
import { BiSolidJoystickAlt as PlayIcon }  from 'react-icons/bi'
import { BiBookHeart as AddFaveIcon } from 'react-icons/bi'
import { BiSolidBookHeart as RemoveFaveIcon } from 'react-icons/bi'
import { useState } from 'react'

const ParkLi = ({ handleFavorite, id, name, year, location, link, image, gameWon, favorited, displayPark }) => {
  const [isFavorited, setIsFavorited] = useState(false)


  const handleClick = () => {
    displayPark(id)
  }

  const handleFave = () => {
    handleFavorite(id, isFavorited)
    setIsFavorited(current => !current)
  }

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
          <DisplayIcon className='react-icon display-icon' />
          <p>Details</p>
        </div>   
        <div className='single-icon-container'>
          {!isFavorited ? (
              <div className='single-icon-container'>
                <AddFaveIcon onClick={handleFave} className='react-icon fave-icon'/> <p>Favorite</p>
              </div>
            ) : ( 
              <div class='single-icon-container'>
                <RemoveFaveIcon onClick={handleFave} className='react-icon unfave-icon'/> <p>Unfavorite</p>
              </div>
            )}
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