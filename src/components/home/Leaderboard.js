import { useOutletContext } from 'react-router-dom'
import { useState, useEffect } from 'react'
import UserStat from './UserStat'

const Leaderboard = () => {
  const { users } = useOutletContext()

  // Sort the users array based on points in descending order
  const sortedUsers = users.sort((a, b) => b.points - a.points)

  const mappedUsers = sortedUsers.map((user, index) => <UserStat key={user.id} position={index + 1} {...user} />)

  return (
    <div className='game-info'>
      <h2>Leaderboard</h2>
      <ol>
        {mappedUsers}
      </ol>
    </div>
  )
}

export default Leaderboard