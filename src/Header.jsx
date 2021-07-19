import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <div className='headerContent' >
            <h1>Brewery Search</h1>
            <div className='intro' >
                Search for Breweries across the US by Name or Location!
            </div>
        </div>
    )
}

export default Header;