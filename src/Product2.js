import React from 'react';
import './Product2.css';

function Product2({ id, title, price, image }) {
    return (
        <div>
            <div className="product2">
                <div className="product--info">
                    <p><b>{title}</b></p>

                    <p className="product--price">
                        <bold>₹</bold>
                        <strong>{price}</strong>
                    </p>

                    <img className="product--image" src={image} alt="" />
                </div>
                <div className="product--info">
                    <p><b>{title}</b></p>

                    <p className="product--price">
                        <bold>₹</bold>
                        <strong>{price}</strong>
                    </p>

                    <img className="product--image" src={image} alt="" />
                </div>
                <div className="product--info">
                    <p><b>{title}</b></p>

                    <p className="product--price">
                        <bold>₹</bold>
                        <strong>{price}</strong>
                    </p>

                    <img className="product--image" src={image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Product2
