import React from 'react';
import './Product.css';

function Product({id, title, price, image}) {
    return (
        <div className="product">
          <div className="product--info">
            <P>{title}</P>

            <p className="product--price">
            <bold>₹</bold>
            <strong>{price}</strong>
            </p>
                
             <img className="product--image" src={Image} alt="" /> 
          </div>
             <button className="product--button">Add to Cart</button>  
          
        </div>
    )
}

export default Product