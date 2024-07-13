import { FiShoppingCart } from "react-icons/fi"; 
import { AiOutlineUser } from "react-icons/ai"; 
import React from 'react';
import { useState, useEffect } from "react";
import './nav.scss';
import logoIcon from '../../images/logo-icon.svg';
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from '../../locales/i18next'


const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const data = useTranslation()
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 250) {  
        setScrolled(true);
      } else {
        setScrolled(false);
      }

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };


    
  }, []);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <div className="nav__hug">
          <NavLink to={'/login'} className="nav__profile">
              <AiOutlineUser className="nav__user" /> 
              <p>{t('profile')}</p>
          </NavLink>
          <div className="nav__logo">
            <NavLink className="nav__link" to="/">
                <img src={logoIcon} alt="" /> E-COMMERCE
            </NavLink>
          </div>
          <div className="nav__cart">
            <NavLink className="nav__link" to="/cart">
              <FiShoppingCart className="cart-icon" />
            </NavLink>
            <select defaultValue={data.i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
                    <option value="en">En</option>
                    <option value="ru">Ru</option>
                    <option value="uz">Uz</option>
                </select>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav