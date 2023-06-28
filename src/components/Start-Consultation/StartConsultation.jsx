import React from 'react';
import './StartConsultation.css';
import ImageMagicWand from '../../assets/img/magic-wand.svg';
import ImageYellowCat from '../../assets/img/yellow-cat.jpg';

const StartConsultation = () => {
    return (
      <div className='start-consultation-container'>
        <div className='consultation-alert'>
          <div className='contultation-alert-info'>
            <img className='image-wand' src={ImageMagicWand} alt='Image of Sakura’s magic wand' />
            
            <p>Voy a explorar lo más profundo de tu ser. ¿Estás listo?</p>
          </div>

          <button className="consultation-accepted">Listo</button>
        </div>

        <img 
        className='kero-image' src={ImageYellowCat} alt='Image of Kero' />
      </div>
    );
};
    
export default StartConsultation