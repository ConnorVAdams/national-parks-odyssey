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
        <img onClick={() => navigate('./')} className='nps-logo' src='https://wikiwandv2-19431.kxcdn.com/_next/image?url=https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo_of_the_United_States_National_Park_Service.svg/640px-Logo_of_the_United_States_National_Park_Service.svg.png&w=640&q=50' alt='nps-logo' />
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
        <h2>Current User: {currentUser.username}</h2>
        <h2> {currentUser.points} points</h2>
      </div>
    </div>
  )
}

export default Header
