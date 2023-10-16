import Book from "./Book"
import Map from "./Map"
import Rules from "./Rules"
import ParkCard from './ParkCard'
import Header from './Header'
import NavButtons from "./NavButtons"

const Home = () => {
  return (
    <div className='wrapper'>
      <Header />
      <NavButtons />
      <div className='game-info' />
      {/* ^ Turn this into component if stretch goals are met, includes Leaderboard and GameInfo/Stats. */}
      <div className='main-container'>
        <Book />
        {/* <Map /> */}
        {/* <Rules /> */}
      </div>
      <div className='carousel'>
        <ParkCard />
      {/* ^ Turn this into component if more than basic styling is needed. */}
      </div>
      <div className='footer'></div>
    </div>
  )
}

export default Home