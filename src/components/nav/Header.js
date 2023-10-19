import { useNavigate } from "react-router-dom"
import React, { useState } from 'react'
import Modal from "./UserModal"

const Header = ({ currentUser, onLoginUserSubmit, onCreateUserSubmit }) => {
  const [isCreateUserModalOpen, setCreateUserModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const navigate = useNavigate()
  const handleOpenCreateUserModal = () => {
    setCreateUserModalOpen(true);
  };

  const handleCloseCreateUserModal = () => {
    setCreateUserModalOpen(false);
  };

  const handleOpenLoginModal = () => {
    setLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <div className='header'>
      <div className='title-container'>
        <img onClick={() => navigate('./')} className='nps-logo' src='https://www.nps.gov/wrst/learn/historyculture/images/NPS_16.jpg?maxwidth=1300&autorotate=false' alt='nps-logo' />
        <h1 className='title'>Untitled National Parks Game</h1>
      </div>
      <div className='user-container'>
      <button onClick={handleOpenCreateUserModal}>Create User</button>
        <Modal
          isOpen={isCreateUserModalOpen}
          onClose={handleCloseCreateUserModal}
          onUserSubmit={onCreateUserSubmit}
        />

        <button onClick={handleOpenLoginModal}>Login</button>
        <Modal
          isOpen={isLoginModalOpen}
          onClose={handleCloseLoginModal}
          onLoginUserSubmit={onLoginUserSubmit}
        />
      </div>
      <div className='point-container'>
        <h2>Current User: {currentUser ? currentUser.username : 'Guest' }</h2>
        <h2>{currentUser ? currentUser.points : 0} points</h2>
      </div>
    </div>
  )
}

export default Header