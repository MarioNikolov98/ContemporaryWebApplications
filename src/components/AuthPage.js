import React, { useState } from 'react';
import './AuthPage.css'; 

const AuthPage = () => {
  // State for login and registration
  const [loginInfo, setLoginInfo] = useState({
    loginEmail: '',
    loginPassword: ''
  });
  const [registerInfo, setRegisterInfo] = useState({
    registerEmail: '',
    registerPassword: '',
    registerConfirmPassword: ''
  });

  // Handle change for login and registration forms
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle submit for login and registration forms
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Add login logic here
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    // Add registration logic here
  };

  return (
    <div className="auth-page">
      <div className="login-section">
        <h2>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <input
            type="email"
            name="loginEmail"
            placeholder="Email"
            value={loginInfo.loginEmail}
            onChange={handleLoginChange}
            required
          />
          <input
            type="password"
            name="loginPassword"
            placeholder="Password"
            value={loginInfo.loginPassword}
            onChange={handleLoginChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>

      <div className="register-section">
        <h2>Register</h2>
        <form onSubmit={handleRegisterSubmit}>
          <input
            type="email"
            name="registerEmail"
            placeholder="Email"
            value={registerInfo.registerEmail}
            onChange={handleRegisterChange}
            required
          />
          <input
            type="password"
            name="registerPassword"
            placeholder="Password"
            value={registerInfo.registerPassword}
            onChange={handleRegisterChange}
            required
          />
          <input
            type="password"
            name="registerConfirmPassword"
            placeholder="Confirm Password"
            value={registerInfo.registerConfirmPassword}
            onChange={handleRegisterChange}
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
