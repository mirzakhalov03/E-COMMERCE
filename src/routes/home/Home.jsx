import React from 'react'
import Nav from '../../components/nav/Nav'
import './home.scss'
import hero from '../../images/hero.png'
import video from '../../images/video.mp4'
import Card from '../../components/card/Card'

const Home = () => {
  return (
    <>
      <Nav />
      <div className='hero'>
          <video src={video} autoPlay loop muted />
          <div className="container">
              <div className="products__wrapper">
                  <p className="product-title">All Products</p>
                  <div className="cards__hug">
                    <Card />
                    
                  </div>

              </div>
          </div>
      </div>
    </>
  )
}

export default Home