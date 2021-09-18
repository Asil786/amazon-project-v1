import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
    return (
        <div className="header">
          <img className="header--logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon"/>
        
          <div className="header--search">
          <input className="header--searchInput" type="text" />
          {/* Material UI */}
          <SearchIcon className="header--searchIcon" />
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

          <div className="header--optionBasket">
          <ShoppingCartIcon />
          <span className="header--optionLineTwo header--basketCount">0</span>
          </div>



        </div>
    )
}

export default Header;