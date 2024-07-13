import React, { useState } from 'react';
import './login.scss';
import Footer from '../../footer/Footer';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://backend-e-commerce-production.up.railway.app/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const contentType = response.headers.get('Content-Type');
      let data;
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      if (!response.ok) {
        console.error('Login failed:', data);
        throw new Error(data || 'Login failed');
      }

      console.log('Login successful:', data);
      navigate('/');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <>
      <div className='login'>
        <div className="container">
          <div className="login__wrapper">
            <h1>Login</h1>
            <span>Enter your credentials to access your account.</span>
            <form onSubmit={handleSubmit}>
              <label>Email address</label>
              <input type="text" placeholder="Email" value={email} onChange={handleChangeEmail} />
              <br />
              <label>Password</label>
              <input type="password" placeholder="Password" value={password} onChange={handleChangePassword} />
              <NavLink to="/forgot">Forgot password?</NavLink>
              <br />
              <button type="submit">Login</button>
            </form>
            <p className='no-account'>Don't have an account? <NavLink to="/register">Register</NavLink></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
