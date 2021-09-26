import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
          <div className="home--container">
            <img className="home--image" src="https://m.media-amazon.com/images/I/71ZBHazSvIL._SX3000_.jpg" alt="" />

            <div className="home--row">
            <Product />
            <Product />
            <Product />
            </div>
            <div className="home--row">
            <Product />
            <Product />
            </div>
            <div className="home--row">
            <Product />
            </div>

          </div>  
        </div>
    )
}

export default Home