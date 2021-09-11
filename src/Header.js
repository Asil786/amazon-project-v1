import React from 'react';
import './Header.css'

function header() {
    return (
        <div className='header'>
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            />
           <div className="header__nav">
            <div className="header__option">
                <span className="header__optionLineOne">Hello</span>
                <span className="header__optionLineOne">Sign In</span>
            </div>
            <div className="header__option">
            <span className="header__optionLineOne">Return</span>
            <span className="header__optionLineOne">&order</span>
            </div>
            <div className="header__option">

            </div>
        </div>
    )
}

export default header
