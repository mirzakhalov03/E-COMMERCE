import { ImCross } from "react-icons/im"; 
import React, { useContext } from 'react';
import Nav from '../nav/Nav';
import './cart.scss';
import AppContext from "../../context/store";
import Footer from "../footer/Footer";
import { useTranslation } from "react-i18next";

const Cart = () => {
  const { t } = useTranslation();
  const [state, dispatch] = useContext(AppContext);

  const handleRemoveFromCart = (product) => {
    dispatch({ type: 'REMOVED', payload: product });
  };

  const handleIncrementQuantity = (product) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: product });
  };

  const handleDecrementQuantity = (product) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: product });
  };

  const calculateTotal = () => {
    return state.added.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <>
      <Nav />
      <div className='cart'>
        <div className="container">
          <h1>{t("productsInCart")}</h1>
          <div className="table__wrapper">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>{t("product")}</th>
                  <th></th>
                  <th>{t("price")}</th>
                  <th>{t("quantity")}</th>
                  <th>{t("unitPrice")}</th>
                </tr>
              </thead>
              <tbody>
                {state.added.map((product, index) => (
                  <tr key={index}>
                    <td>
                      <button onClick={() => handleRemoveFromCart(product)}><ImCross /></button>
                    </td>
                    <td>
                      <img src={product.image} alt="" />
                    </td>
                    <td>{product.name}</td>
                    <td>${(product.price * product.quantity).toFixed(2)}</td>
                    <td>
                      <span>
                        <button onClick={() => handleDecrementQuantity(product)}>-</button>
                        {product.quantity}
                        <button onClick={() => handleIncrementQuantity(product)}>+</button>
                      </span>
                    </td>
                    <td>${product.price.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="total">
            <div className="total__card">
              <div className="totalCard-info">
                <div className="left">
                  <p>{t("subtotal")}: </p>
                  <br />
                  <p>{t("shipping2")}: </p>
                  <br />
                  <strong>{t("total")}: </strong>
                </div>
                <div className="rightInfo">
                  <p>${calculateTotal().toFixed(2)}</p>
                  <br />
                  <p>$20.00</p>
                  <br />
                  <strong>${(calculateTotal() + 20).toFixed(2)}</strong>
                </div>
              </div>
              <hr />
              <br />
              <button>{t("checkout")}</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
