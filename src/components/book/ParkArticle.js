// import ParkCard from './ParkCard'
import { useEffect, useState } from 'react'
import { Wrapper, Marker } from "@googlemaps/react-wrapper"
import BookMap from './BookMap.js'

const ParkArticle = ({ park, handleFavorite, displayPark }) => {
  const { id, name, year, location, coordinates, image, attractions, link, visitors, wildlife, gameWon, description, favorited } = park
  const [currentInfo, setCurrentInfo] = useState(null)
  const [isFavorited, setIsFavorited] = useState(false)

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
              return (
              <li key={animal}>
                  {/* <img src={animal} alt={animal} /> */}
                  <p>{animal}</p>
              </li>
            )})}
          </ul>
        )
      })
    } else {
      setCurrentInfo(current => (<p>{description}</p>))
    }
  }

  useEffect(() => {
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
              return (
              <li key={animal}>
                  <p>{animal}</p>
              </li>
            )})}
          </ul>
        )
      })
    } else {
      setCurrentInfo(current => (<p>{description}</p>))
    }
  }, [park])

  return (
    <div className='park-article'>
      <div className='article-header'>
        <h2>{name}</h2>
      </div>
      <div className='article-top'>
        <div className='article-stats'>
          <img src={image} alt={name} />
          <h4>Est. {year}</h4>
          <h4>{location}</h4>
          <h4>{visitors ? visitors.toLocaleString() : null} visitors</h4>
          <h4><a href={link} target='_blank' rel="noreferrer">{name}</a></h4>
        </div>
        <span className='map-card'>
          <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} version="beta" libraries={["marker"]}>
            <BookMap coordinates={coordinates}/>
          </Wrapper>
        </span>
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