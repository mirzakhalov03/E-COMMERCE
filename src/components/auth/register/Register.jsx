import React, { useState } from 'react';
import './register.scss';
import Footer from '../../footer/Footer';
import { NavLink, useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    street: '',
    apartment: '',
    zip: '',
    city: '',
    country: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://backend-e-commerce-production.up.railway.app/api/v1/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      const contentType = response.headers.get('Content-Type');
      
      let data;
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = await response.text();
      }
  
      if (!response.ok) {
        console.error('Registration failed:', data);
        throw new Error(data || 'Registration failed');
      }
  
      console.log('Registration successful:', data);
      navigate('/login');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  

  return (
    <>
      <div className='register'>
        <div className="container">
          <div className="register__wrapper">
            <h1>Register</h1>
            <span>Enter your credentials to create your account.</span>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Personal information</label>
              <br />
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
              <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
              <input type="tel" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} />
              <br />
              <label htmlFor="address">Address</label>
              <br />
              <input type="text" name="street" placeholder="Street" value={formData.street} onChange={handleChange} />
              <input type="text" name="apartment" placeholder="Apartment" value={formData.apartment} onChange={handleChange} />
              <input type="text" name="zip" placeholder="ZIP code" value={formData.zip} onChange={handleChange} />
              <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
              <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
              <button type="submit">Register</button>
            </form>
            <p className='no-account'>Already have an account? <NavLink to="/login">Login</NavLink></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
