import React from 'react';
import './Product.css';

function Product({ id, title, price, image, image1, image2, image3, image4 }) {
  return (
    <div className="product">
      <div className="product--info">
        <p><b>{title}</b></p>

        <p className="product--price">
          <bold>₹</bold>
          <strong>{price}</strong>
        </p>
        <img className="product--image" src={image} alt="" />
        <div className="product--4images">
          <img className="product--image1" src={image1} alt="" />
          <img className="product--image2" src={image2} alt="" />
        </div>
        {/* <div className="product--4images1">
          <img className="product--image3" src={image3} alt="" />
          <img className="product--image4" src={image4} alt="" />
        </div> */}

      </div>
      <button className="product--button">Add to Cart</button>

    </div>

  )
}

export default Product