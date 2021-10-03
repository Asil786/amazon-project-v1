import React from 'react';
import './Home.css';
// import Navbar from './Navbar';
import Product from './Product';

function Home() {
  return (
    <div className="home">

      <div className="home--container">
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
            id="05"
            title="HP 15 (2021) Thin & Light 11th Gen Core i3 Laptop, 8 GB RAM, 1TB HDD,"
            price={500}
            image="https://m.media-amazon.com/images/I/81Ne5qKmE8L._SL1500_.jpg"
          />
          <Product
            id="06"
            title="Redmi 139 cm (55 inches) 4K Ultra HD Android Smart LED TV X55|L55M6-RA (Black) (2021 Model)"
            price={50}
            image="https://images-eu.ssl-images-amazon.com/images/I/51DG3OI8blL._SY300_SX300_QL70_FMwebp_.jpg"
          />
        </div>
        <div className="home--row">
          <Product
            id="06"
            title="New Apple iPhone 12 Pro Max (256GB)"
            price={1.00}
            image="https://images-eu.ssl-images-amazon.com/images/I/41N9-hbLe0L._SY445_SX342_QL70_FMwebp_.jpg"
          />


          <Product
            id="07"
            title="ASUS VivoBook 15 (2020), 39.6 cm HD, Dual Core Intel Celeron N4020, Thin and Light Laptop (4GB RAM/256GB"
            price={2000.00}
            image="https://m.media-amazon.com/images/I/71S8U9VzLTL._SL1500_.jpg"
          />
          <Product
            id="08"
            title="Noise ColorFit Ultra Smartwatch with 1.75 HD TruView Display, 60 Sports"
            price={3.00}
            image="https://m.media-amazon.com/images/I/71mRLPn333L._SL1500_.jpg"
          />
        </div>
        <div className="home--row">
          <Product
            id="06"
            title="New Apple iPhone 12 Pro Max (256GB)"
            price={1.00}
            image="https://images-eu.ssl-images-amazon.com/images/I/41N9-hbLe0L._SY445_SX342_QL70_FMwebp_.jpg"
          />


          <Product
            id="07"
            title="Noise ColorFit Pulse Spo2 Smart Watch with 10 days battery life, 60+ Watch Faces, 1.4 Full Touch HD"
            price={2000.00}
            image="https://images-eu.ssl-images-amazon.com/images/I/41XH-IpxCQL._SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product
            id="04"
            title="DIGITEK® (DHM-001) Wired Stereo Headphones with Mic"
            price={50}
            image="https://m.media-amazon.com/images/I/51lNdi1DyfL._SL1280_.jpg"
          />
        </div>
      </div>
    </div>
  )
}

export default Home