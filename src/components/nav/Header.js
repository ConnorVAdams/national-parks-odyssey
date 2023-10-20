import { useNavigate } from "react-router-dom"
import React, { useState } from 'react'
import Modal from "./UserModal"
import "./Header.css"


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
        <img onClick={() => navigate('./')} className='nps-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/US-NationalParkService-Logo.svg/1200px-US-NationalParkService-Logo.svg.png' alt='nps-logo' />
        <h1 className='title'>National Parks Odyssey</h1>
      </div>
    
        {currentUser ? 
        <div className='point-container'>
          <h2>Current User: {currentUser.username} |</h2>
          <h2> | {currentUser.points} Points</h2>
        </div> : null }

      <div className='user-container'>
        <button id="create-user" onClick={handleOpenCreateUserModal}>Create User</button>
          <Modal
            isOpen={isCreateUserModalOpen}
            onClose={handleCloseCreateUserModal}
            onUserSubmit={onCreateUserSubmit}
          />

          <button id="login" onClick={handleOpenLoginModal}>Login</button>
          <Modal
            isOpen={isLoginModalOpen}
            onClose={handleCloseLoginModal}
            onLoginUserSubmit={onLoginUserSubmit}
          />

      </div>

    </div>
  )
}

export default Header