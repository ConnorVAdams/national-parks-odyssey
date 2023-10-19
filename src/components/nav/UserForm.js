import React, { useState } from 'react';

const UserForm = ({ onUserSubmit, onLoginUserSubmit }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      setError('Please submit a username.');
      return;
    }

    if (onLoginUserSubmit) {
      onLoginUserSubmit(username)
      setUsername('');
    } else {
      // Proceed with user submission
      onUserSubmit(username);
      setUsername('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;