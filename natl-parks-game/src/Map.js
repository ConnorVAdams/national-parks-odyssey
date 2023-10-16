import NavButtons from './NavButtons'
import ParkIcon from './ParkIcon'
import ParkCard from './ParkCard'
import Game from './Game'

const Map = () => {
  return (
    <>
      <div className='map'>
        <ParkIcon />
        <ParkCard />
        <Game />
      </div>
    </>
  )
}

export default Map