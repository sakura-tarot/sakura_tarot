import React from 'react';
import HomePage from '../../pages/Home/HomePage';
import './Header.css';
import IconHome from '../../assets/img/home-icon.svg';

const Header = () => {
    return ( 
    <div className='header-container'>
        <div className='icon-home'>
                <img  src={IconHome} alt='icon-home'/>
        </div>
        
        <h1>Sakura Tarot</h1>

    </div>
    );    
};

export default Header;
