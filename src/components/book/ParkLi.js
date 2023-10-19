import { BiSolidSpreadsheet as DisplayIcon }  from 'react-icons/bi'
import { BiSolidJoystickAlt as PlayIcon }  from 'react-icons/bi'
import { BiBookHeart as AddFaveIcon } from 'react-icons/bi'
import { BiSolidBookHeart as RemoveFaveIcon } from 'react-icons/bi'

const ParkLi = ({ id, name, year, location, link, image, gameWon, favorited, displayPark }) => {
  
  const handleClick = (id) => {
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
          {!favorited ? (
            <div className='single-icon-container'>
              <AddFaveIcon className='react-icon fave-icon'/> <p>Favorite</p>
            </div>
          ) : ( 
            <div class='single-icon-container'>
              <RemoveFaveIcon className='react-icon fave-icon'/> <p>Unfavorite</p>
            </div>
          )}
          {!gameWon ? 
            <div className='single-icon-container'>
              <PlayIcon className='react-icon play-icon'/> <p>Play Game</p>
            </div> : null }
        </div>
    </div>
  )
}

export default ParkLi