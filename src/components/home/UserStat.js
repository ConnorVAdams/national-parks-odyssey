import React from 'react'

const UserStat = ({ position, username, points, cards}) => {
    let cardsLength = cards.length
  return (
        <li className='user-stat'>
          <p>
            {position}. {username}
          </p>
          <p>
            {points} points 
          </p>
          <p>
            {cardsLength} cards
          </p>
        </li>
  )
}

export default UserStat