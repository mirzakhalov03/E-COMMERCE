import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';
import './product.scss';
import star from '../../images/star.svg';
import { BsTwitter } from "react-icons/bs"; 
import { BsFacebook } from "react-icons/bs"; 
import { AiOutlineHeart } from "react-icons/ai"; 
import { FiShoppingCart } from "react-icons/fi"; 
import TopCard from '../../components/card/TopCard';
import AppContext from '../../context/store'; 
import { useTranslation } from "react-i18next";

const Product = ({ products: initialProducts }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState(initialProducts || []);
  const [error, setError] = useState(null);
  const [state, dispatch] = useContext(AppContext); 

  const { t } = useTranslation();
  

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://backend-e-commerce-production.up.railway.app/api/v1/products/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (!initialProducts) {
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
    }
  }, [initialProducts]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!product) {
    return <p>Loading...</p>;
  }

  const handleAddToCart = () => {
    dispatch({ type: 'ADDED', payload: { ...product, quantity: 1 } });
  };

  const topRatedProducts = products.filter((p) => p.rating > 4).slice(0, 3);


  return (
    <>
      <Nav />
      <div className='product'>
        <div className="container">
          <div className="product__wrapper">
            <div className="product-img">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h2>{product.name}</h2>
              <br />
              <div className="rating">
                {Array.from({ length: Math.round(product.rating) }).map((_, index) => (
                  <img key={index} src={star} alt="Rating" />
                ))}
                <span>{product.rating}</span>
              </div>
              <br />
              <hr />
              <br />
              <div className="price">
                <strong>${product.price}</strong>
                <span>10% off</span>
              </div>
              <br />
              <div className="features">
                <div className="left">
                  <p>{t('availability')}: <strong>{product.availability ? 'Yes' : 'No'}</strong></p>
                  <br />
                  <p>{t('Category')}: {product.category}</p>
                  <br />
                  <p>{t('Free Shipping')}: <strong>{product.freeShipping ? 'Yes' : 'No'}</strong></p>
                  <br />
                  <p>{t('inStock')}: <strong>{product.countInStock} {t('pcs')}</strong></p>
                </div>
                <div className="right">
                  <p>{t('company')}: <strong>{product.brand}</strong></p>
                  <br />
                  <br />
                  <p>{t('Purchase')}: <strong>{product.numReviews} {t('pcs')}</strong></p>
                </div>
              </div>
              <br />
              <hr />
              <br />
              <div className="cart-like">
                <button onClick={handleAddToCart}> <FiShoppingCart />{t('addToCart')}</button>
                <button><AiOutlineHeart /></button>
              </div>
              <br />
              <div className="share">
                <a style={{backgroundColor: "#3b5998"}} href="#"><BsFacebook />{t("shareFb")}</a>
                <a href="#"><BsTwitter />{t("shareTw")}</a>
              </div>
            </div>
          </div>
          <div className="product__richDescription">
            <h2>{t("productInfo")}</h2>
            <p>{product.description}</p>
          </div>
          <div className="topRated">
            <h2>{t("topRated")}</h2>
            <div className="topRated__wrapper">
              {topRatedProducts.length > 0 ? (
                topRatedProducts.map(product => (
                  <TopCard key={product.id} product={product} />
                ))
              ) : (
                <p>{t("noProducts")}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
