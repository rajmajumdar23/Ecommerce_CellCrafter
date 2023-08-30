// Login.js
import React, { useState } from 'react'; // Import useState
import '../Styling/Login.css';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password

  const redirectSubmit = () => {
    if (username && password) { // Check if both username and password are filled
      console.log("Username:", username);
      console.log("Password:", password);
      navigate('/');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form">
      <p className='h2'>Login</p>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button
          type="button"
          className="login-button"
          id='login'
          onClick={redirectSubmit}
          disabled={!username || !password}
        >
          Login
        </button>
        <p className="create-account">
          Don't have an account? <NavLink to="/signup">Create a new account</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
