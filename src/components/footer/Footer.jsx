import React from 'react'
import './footer.scss'
import Logo from '../../images/navLogo.svg'
import creditcard from '../../images/creditCards.svg'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer__hug">
          <div className="footer__card">
            <img src={Logo} alt="" />
            <p>{t("footerText")}</p>
          </div>
          <div className="footer__card">
            <h3>{t("footer-title")}</h3>
            <p>{t("footer1")}</p>
            <p>{t("footer2")}</p>
            <p>{t("footer3")}</p>
            <p>{t("footer4")}</p>
            <p>{t("footer5")}</p>
            <p>{t("footer6")}</p>
          </div>
          <div className="footer__card">
            <h3>{t("footer-title2")}</h3>
            <p>E-Comm , 4578 Marmora Road, </p>
            <p>Glasgow D04 89GR</p>
            <p>{t("footer-phone")}</p>
            <p>Fax : +1 800 123 1235</p>
            <p>{t("footer-mail")}</p>
            
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="footer__end">
          <p>{t("footer8")}</p>
          <img src={creditcard} alt="" />
        </div>
      </div>
    </footer>
  )
}

export default Footer