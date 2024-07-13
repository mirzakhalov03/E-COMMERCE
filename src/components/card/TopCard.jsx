import React from 'react'
import './topCard.scss'
import star from '../../images/star.svg';

const TopCard = ({ product }) => {
  return (
    <div className='topCard'>
      <div className="card__img">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="card__details">
        <h3>{product.name}</h3>
        <p>
          <img src={star} alt="Rating" />
          <img src={star} alt="Rating" />
          <img src={star} alt="Rating" />
          <img src={star} alt="Rating" />
          <img src={star} alt="Rating" />
          &nbsp;
          &nbsp;
        </p>
        <div className='price'>
          <strong>${product.price}</strong>
          &nbsp;
          &nbsp;
          &nbsp;
          <strike>${product.price}</strike>
        </div>
      </div>
    </div>
  )
}

export default TopCard