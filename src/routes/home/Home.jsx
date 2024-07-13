import Nav from '../../components/nav/Nav';
import './home.scss';
import video from '../../images/video.mp4';
import Card from '../../components/card/Card';
import React, { useEffect, useState,  } from 'react';
import { NavLink, Link } from 'react-router-dom';
import CloseUp from '../../components/closeUp/CloseUp';
import shipping from '../../images/shipping.svg';
import refund from '../../images/refund.svg';
import support from '../../images/support.svg';
import TopCard from '../../components/card/TopCard';
import Footer from '../../components/footer/Footer';
import { useTranslation } from "react-i18next";


const Home = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://backend-e-commerce-production.up.railway.app/api/v1/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data || []); 
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProducts();
  }, []);


  return (
    <>
      <Nav />
      <div className='hero'>
        <video className='video' src={video} autoPlay loop muted />
        <div className="container">
          <div className="products__wrapper">
            <p className="product-title">{t('allProducts')}</p>
            <div className="cards__hug">
              {products.length > 0 ? (
                products.map(product => (
                  <Card key={product.id} product={product} />
                ))
              ) : (
                <p>{t('noProducts')}</p>
              )}
            </div>
          </div>
          
        </div>
        <CloseUp />
        <div className="container">
          <div className="property">
            <div className="property__card">
              <img src={shipping} alt="" />
              <h3>{t('shipping')}</h3>
              <p>{t('lorem')}</p>
            </div>
            <div className="property__card">
              <img src={refund} alt="" />
              <h3>{t('refund')}</h3>
              <p>{t('lorem')}</p>
            </div>
            <div className="property__card">
              <img src={support} alt="" />
              <h3>{t('support')}</h3>
              <p>{t('lorem')}</p>
            </div>
          </div>
          <div className="topRated">
            <h2>{t('topRated')}</h2>
            <div className="topRated__wrapper">
            {products.length > 0 ? (
                products.filter((product) => product.rating > 4).map(product => (
                  <TopCard key={product.id} product={product} />
                ))
              ) : (
                <p>{t('noProducts')}</p>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
