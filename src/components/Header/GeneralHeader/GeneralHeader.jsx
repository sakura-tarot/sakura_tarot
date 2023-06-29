import React from 'react';
import './GeneralHeader.css';
import IconHome from '../../../assets/img/home-icon.svg';
import { Link } from 'react-router-dom';

const GeneralHeader = () => {
    return ( 
        <header className='header-container'>
            <div className='icon-home'>
                   <Link to='/'><img  src={IconHome} alt='icon-home'/></Link>
            </div>
            
            <h1>Sakura Tarot</h1>
        </header>
    );    
};

export default GeneralHeader;
