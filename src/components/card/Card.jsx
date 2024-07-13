import { BsCart } from "react-icons/bs"; 
import { BsFillCartFill } from "react-icons/bs"; 
import { BsFillCartCheckFill } from "react-icons/bs"; 
import { BsFillEyeFill } from "react-icons/bs"; 
import { FaShoppingCart } from "react-icons/fa"; 
import React from 'react';
import { useContext } from "react";
import './card.scss';
import AppContext from "../../context/store";
import star from '../../images/star.svg';
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export const initialState = {
  added: [],
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADDED':
      const existingProduct = state.added.find(product => product.id === action.payload.id);
      if (existingProduct) {
        return {
          ...state,
          added: state.added.map(product =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          )
        };
      }
      return {
        ...state,
        added: [...state.added, action.payload]
      };

    case 'REMOVED':
      return {
        ...state,
        added: state.added.filter(product => product.id !== action.payload.id)
      };

    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        added: state.added.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };

    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        added: state.added.map(item =>
          item.id === action.payload.id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      };

    default:
      return state;
  }
};


const Card = ({ product }) => {
  const { t } = useTranslation();
  const [state, dispatch] = useContext(AppContext);


  const handleAddToCart = () => {
    console.log(product);
    dispatch({ type: 'ADDED', payload: { ...product, quantity: 1 } });
  };

  return (
    <div className='card'>
      <div className="card__img">
        <img src={product.image} alt={product.name} />
        <div className="card__overlay">
          <button onClick={handleAddToCart}><BsCart /></button>
        </div>
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
          {product.rating}
        </p>
        <div className='price'>
          <strong>${product.price}</strong>
          <strike>${product.price}</strike>
          <span>10% off</span>
        </div>
        <NavLink to={`/product/${product.id}`}><BsFillEyeFill />{t("view")}</NavLink>
      </div>
    </div>
  )
}

export default Card;
