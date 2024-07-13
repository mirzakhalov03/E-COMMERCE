import React from 'react'
import './closeup.scss'
import bigShoe from '../../images/bigShoe.png'
import { useTranslation } from 'react-i18next'

const CloseUp = () => {
  const { t } = useTranslation();
  return (
    <div className='closeUp'>
        <div className="container">
            <div className="closeUp__wrapper">
                <div className="closeUp-title">
                    <h2>{t("bigShoeTitle")}</h2>
                    <p>{t("bigshoeText")}</p>
                    <a href="#">{t("bigshoeBtn")}</a>
                </div>
                <img src={bigShoe} alt="" />
            </div>
        </div>
    </div>
  )
}

export default CloseUp