import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
          <div className="home--container">
            <img className="home--image" src="https://m.media-amazon.com/images/I/71i723QTb+L._SX3000_.jpg" alt="" />

            <div className="home--row">
            <Product 
               id="01"
               title="See U in C by Ali Karim Sayed (Author)"
               price={4450}
               image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
            />
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