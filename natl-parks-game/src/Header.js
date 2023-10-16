const Header = () => {
  return (
    <div className='header'>
      <div className='title-container'>
        <img className='nps-logo' src='https://www.nps.gov/wrst/learn/historyculture/images/NPS_16.jpg?maxwidth=1300&autorotate=false' alt='nps-logo' />
        <h1 className='title'>Untitled National Parks Game</h1>
      </div>
      <div className='point-container'>
        <h2> 0 points</h2>
      </div>
    </div>
  )
}

export default Header