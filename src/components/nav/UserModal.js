import React from 'react';
import UserForm from './UserForm';

const Modal = ({ isOpen, onClose, onUserSubmit, onLoginUserSubmit }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="user-modal">
      <div className="user-modal-content">
        <span className="user-close" onClick={onClose}>
          &times;
        </span>
        <UserForm onUserSubmit={onUserSubmit} onLoginUserSubmit={onLoginUserSubmit}/>
      </div>
    </div>
  );
};

export default Modal;