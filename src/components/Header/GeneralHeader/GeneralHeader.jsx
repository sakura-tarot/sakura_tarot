import React from 'react';
import './GeneralHeader.css';
import IconHome from '../../assets/img/home-icon.svg';

const GeneralHeader = () => {
    return ( 
        <header className='header-container'>
            <div className='icon-home'>
                    <img  src={IconHome} alt='icon-home'/>
            </div>
            
            <h1>Sakura Tarot</h1>
        </header>
    );    
};

export default GeneralHeader;
