// import ParkCard from './ParkCard'
import { useEffect, useState } from 'react'
import { BiBookHeart as AddFaveIcon } from 'react-icons/bi'
import { BiSolidBookHeart as RemoveFaveIcon } from 'react-icons/bi'

const ParkArticle = ({ park }) => {
  const { id, name, year, location, coordinates, image, attractions, link, visitors, wildlife, gameWon, description, favorited } = park
  const [currentInfo, setCurrentInfo] = useState(null)

  const displayInfo = ({ target: { name } }) => {
    if (name === 'attractions') {
      setCurrentInfo(current => {
        return (
          <ul>
            {attractions.map(attraction => {
              return <li key={attraction}>{attraction}</li>
            })}
          </ul>
        )
      })
    } else if (name === 'wildlife') {
      setCurrentInfo(current => {
        return (
          <ul>
            {wildlife.map(animal => {
              return <li key={animal}>{animal}</li>
            })}
          </ul>
        )
      })
    } else {
      setCurrentInfo(current => (<p>{description}</p>))
    }
  }

  return (
      <div className='park-article'>
        <div className='article-header'>
          <h2>{name}</h2>
          {!favorited ? (
            <div className='single-icon-container'>
              <AddFaveIcon className='react-icon fave-icon'/> <p>Favorite</p>
            </div>
          ) : ( 
            <div class='single-icon-container'>
              <RemoveFaveIcon className='react-icon fave-icon'/> <p>Unfavorite</p>
            </div>
          )}
        </div>
        <div className='article-top'>
          <div className='article-stats'>
            <img src={image} alt={name} />
            <h4>Est. {year}</h4>
            <h4>{location}</h4>
            <h4>{visitors} visitors</h4>
            <h4><a href={link} target='_blank'>{name}</a></h4>
          </div>
          {!gameWon ? (
            //TODO Figure out how to destructure new coordinates and get Google Map on the page.
            <span className='map-card'>Map</span>
          ) : ( null
            // <ParkCard/> 
          )}
        </div>
        <div className='article-bottom'>
          <div className='article-buttons'>
            <button name='attractions' onClick={displayInfo}>Attractions</button>
            <button name='description' onClick={displayInfo}>Description</button>
            <button name='wildlife' onClick={displayInfo}>Wildlife</button>
          </div>
          <div className='info-container'>
            {!currentInfo ? <p>{description}</p> : null}
            {currentInfo}
          </div>
        </div>
      </div>
  )
}

export default ParkArticle