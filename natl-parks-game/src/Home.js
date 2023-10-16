import Book from "./Book"
import Map from "./Map"
import Rules from "./Rules"
import ParkCard from './ParkCard'

const Home = () => {
  return (
    <>
      <Header />
      <div className='game-info' />
      {/* ^ Turn this into component if stretch goals are met. */}
      <div className='main-container'>
        <Book />
        <Map />
        <Rules />
      </div>
      <div className='carousel'>
        <ParkCard />
      </div>
      {/* ^ Turn this into component if more than basic styling is needed. */}
    </>
  )
}

export default Home