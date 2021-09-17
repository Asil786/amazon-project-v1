import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
          <img className="header--logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon"/>
        
          <div className="header--search">
          <input className="header--searchInput" type="text" />
          {/* Material UI */}
          </div>  

          <div className="header--nav">
            <div className="header--option">
            <span className="header--optionLineOne">Hello Guest</span>
            <span className="header--optionLineTwo">Sign In</span>
            </div>

            <div className="header--option">
                <span className="header--optionLineOne">Return</span>
            <span className="header--optionLineTwo">& Order</span>
            </div>

            <div className="header--option">
                <span className="header--optionLineOne">Your</span>
            <span className="header--optionLineTwo">Prime</span>
            </div>

          </div>  

        </div>
    )
}

export default Header;