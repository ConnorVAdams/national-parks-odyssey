import React from 'react'

const UserStat = ({ position, username, points, cards}) => {
    let cardsLength = cards.length
  return (
    <div>
        <li>{position}. {username} - {points} points - {cardsLength} cards</li>
    </div>
  )
}

export default UserStat