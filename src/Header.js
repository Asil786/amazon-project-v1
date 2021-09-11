import React from 'react';
import './Header.css'

function header() {
    return (
        <div className='header'>
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                {/* Material UI */ }
            </div>
            <div className='header__nav'>
                <div className="header__option">

                </div>
                <div className="header__option">
                    
                </div>
                <div className="header__option">
                    
                </div>
            </div>
        </div>
    )
}

export default header
