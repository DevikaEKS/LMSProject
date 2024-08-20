
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loginimg from "../../../Asset/Group 270989702.png";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const emailPattern = /^[a-z][a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!username) {
      setUsernameError('Username is required');
      valid = false;
    }
    else if (!emailPattern.test(username)){
      setUsernameError('Invalid email format');
      valid = false;
    }
     else {
      setUsernameError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      if (username === 'admin123@gmail.com') {
        navigate('/admin');
      } else {
        navigate('/coursebanner');
      }
    }
    
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="LoginApp">
      <div className="login-card">
        <div className="login-form">
          <h1 className='logintxt text-center'>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder='Enter your email'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {usernameError && <div className="error-text">{usernameError}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <div className="error-text">{passwordError}</div>}
            </div>
            <div className="form-group button-container">
              <button type="submit" className='rounded-3'>Login</button>
            </div>
            Don't have an account? <span className="register-link" onClick={handleRegisterClick}>Register</span>
          </form>
        </div>
        <div className="login-image">
          <img src={Loginimg} alt="Login" />
        </div>
      </div>
    </div>
  );
}

export default Login;
