import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded credentials for demonstration
    const validUsername = 'user';
    const validPassword = 'password123';

    if (username === validUsername && password === validPassword) {
      // Redirect to Home page on successful login
      navigate('/home');
    } else {
      // Set error message for invalid credentials
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="background">
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              placeholder='user'
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              placeholder='password123'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;