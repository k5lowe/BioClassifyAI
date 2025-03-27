import React, { useState } from 'react';
import './LoginSignup.css';

import user_icon from '../Assets/user.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/keyhole.png';




const LoginSignup = () => {
  const [action, setAction] = useState('Login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (action === 'Login') {
      console.log('Logging in with:', { email, password });
    } else {
      console.log('Signing up with:', { name, email, password });
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === 'Sign Up' && (
          <div className="input">
            <img src={user_icon} className="icon" alt="User Icon" />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}
        <div className="input">
          <img src={email_icon} className="icon" alt="Email Icon" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={password_icon} className="icon" alt="Password Icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      {action === 'Login' && (
        <div className="forgot-password">
          <span>Forgot Password?</span>
        </div>
      )}
      <div className="submit-container">
        <div
          className={action === 'Login' ? 'submit gray' : 'submit'}
          onClick={() => setAction('Login')}
        >
          Login
        </div>
        <div
          className={action === 'Sign Up' ? 'submit gray' : 'submit'}
          onClick={() => setAction('Sign Up')}
        >
          Sign Up
        </div>
      </div>
      <button className="submit-button" onClick={handleSubmit}>
        {action}
      </button>
    </div>
  );
};

export default LoginSignup;