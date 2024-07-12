import React from 'react'
import './card.scss'
import star from '../../images/star.svg'

const Card = () => {
  return (
    <div className='card'>
      <div className="card__img"></div>
      <div className="card__details">
        <h3>Product Name</h3>
        <p>
          <img src={star} alt="" />
          Rating</p>
        <div className='price'>
            <strong>$ 100</strong>
            <strike>$ 100</strike>
            <span>24% off</span>
        </div>
      </div>
    </div>
  )
}

export default Card