const ParkLi = ({ handleFavorite, park, displayPark }) => {
  const { id, name, year, location, coordinates, image, attractions, link, visitors, wildlife, gameWon, description, favorited } = park

  const handleClick = () => {
    displayPark(id)
  }

  // const listedStates = location.map(state => {
  //   if (location.length > 1) {
  //     for (let index = 0; index < location.length; index++) {
  //       const state = location[index]
  //       if (index === location.length - 1) {
  //         return <p key={state}>{`${state}`}</p>
  //       } else {
  //         return <p key={state}>{`${state}, `}</p>
  //       }
  //   }
  //   console.log(state)
  //   }
  // })

  // const newStates = location.map(loc => {
  //   if (location.length > 1) {
  //     for (let index = 0; index < location.length; index++) {
  //       const state = location[index]
  //       if (index === location.length - 1) {
  //         console.log(<p key={state}>{`${state}`}</p>)
  //         return <p key={state}>{`${state}`}</p>
  //       } else {
  //         console.log(<p key={state}>{`${state}`}</p>)
  //         return <p key={state}>{`${state}, `}</p>
  //       }
  //     }
  //   } else {
  //     console.log(<p key={loc}>{loc}</p>)
  //     return <p>{loc}</p>
  //   }
  // })

  return (
    <div className='park-li'>
      <div className='park-info'>
        <img src={image} alt={name} onClick={() => handleClick(id)} />
        <div className='park-li-stats'>
          <h3>{name}</h3>
          <ul>
            <li>Est. {year}</li>
            <div className='bottom-row'>
              <li>{location}</li>
              <div className='button-container'>
                {!gameWon ? 
                <button onClick={() => handleClick(id)}>Play Game</button> : null }
                <button onClick={() => handleClick(id)}>Details</button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ParkLi