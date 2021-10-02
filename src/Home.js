import React from 'react';
import './Home.css';
import Navbar from './Navbar';
import CarouselContainer from './component/Carousel';
import Product from './Product';

function Home() {
  return (
    <div className="home">
    <div className="navbar">
          <br />
          <Navbar />
          </div>
          <div className="carlouse">
          <CarouselContainer /> 
          </div>

      {/* <div className="home--container">
        <img className="home--image" src="https://m.media-amazon.com/images/I/71i723QTb+L._SX3000_.jpg" alt="" /> */}

        <div className="home--row">
          <Product
            id="01"
            title="See U in C by Ali Karim Sayed (Author)"
            price={4450}
            image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
          />
          <Product
            id="02"
            title="OnePlus 9 5G (Astral Black, 8GB RAM, 128GB Storage)"
            price={200}
            image="https://m.media-amazon.com/images/I/61urU8k2lFL._SL1500_.jpg"
          />
          <Product
            id="03"
            title="TIMEWEAR Digital Men's Watch"
            price={100}
            image="https://m.media-amazon.com/images/I/81qcmjX9TrL._UL1500_.jpg"
          />
        </div>
        <div className="home--row">
          <Product
            id="04"
            title="HP 15 (2021) Thin & Light 11th Gen Core i3 Laptop, 8 GB RAM, 1TB HDD,"
            price={500}
            image="https://m.media-amazon.com/images/I/81Ne5qKmE8L._SL1500_.jpg"
          />
          <Product
            id="05"
            title="Samsung 108 cm (43 inches) Crystal 4K Series "
            price={50}
            image="https://images-eu.ssl-images-amazon.com/images/I/31uOeKtIJrS._SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>
        <div className="home--row">
          <Product
            id="06"
            title="New Apple iPhone 12 Pro Max (256GB)"
            price={1.00}
            image="https://images-eu.ssl-images-amazon.com/images/I/41N9-hbLe0L._SY445_SX342_QL70_FMwebp_.jpg"
          />
        </div>
        

      </div>
    </div>
  )
}

export default Home