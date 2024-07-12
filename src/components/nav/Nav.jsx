import { FiShoppingCart } from "react-icons/fi"; 
import { AiOutlineUser } from "react-icons/ai"; 
import React from 'react'
import './nav.scss'
import logoIcon from '../../images/logo-icon.svg'

const Nav = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav__hug">
          <div className="nav__profile">
              <AiOutlineUser className="nav__user" /> My Profile
          </div>
          <div className="nav__logo">
            <a href="#">
                <img src={logoIcon} alt="" /> E-COMMERCE
            </a>
          </div>
          <div className="nav__cart">
            <FiShoppingCart className="cart" />
            <select>
              <option value="en">EN</option>
              <option value="ru">RU</option>
              <option value="uz">UZ</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav