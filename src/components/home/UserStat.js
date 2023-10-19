import React from 'react'

const UserStat = ({ position, username, points, cards}) => {
    let cardsLength = cards.length
  return (
    <div>
        <li>
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
    </div>
  )
}

export default UserStat