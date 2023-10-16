import ParkCard from './ParkCard'

const ParkArticle = ({ id, name, year, location, coordinates, image, attractions, link, visitors, wildlife, gameWon, description }) => {
  return (
      <div className='park-article'>
        <h2>{name}</h2>
        <ParkCard />
      </div>
  )
}

export default ParkArticle