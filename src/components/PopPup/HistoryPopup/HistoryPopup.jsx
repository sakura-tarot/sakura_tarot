import React, { useState } from 'react';
import './HistoryPopup.css';
import CloseIcon from '../../../assets/img/close-icon-purple.svg';
import UserIcon from '../../../assets/img/user-icon.svg'
const PopupHistory = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      <button onClick={handlePopupToggle}>Abrir Popup</button>

      {isPopupOpen && (
        <div className="popup-history-container">
                <h2>HISTORIAL</h2>
                <img
                    src={CloseIcon}
                    alt="Cerrar"
                    onClick={handlePopupToggle} 
                    className='close-container'/>

          <div className="popup-box">
    
                    <h3>PRESENTE:</h3>
                    <p>Respuesta de la API presente</p>

                    <h3>PRESENTE:</h3>
                    <p>Respuesta de la API presente</p>

                    <h3>FUTURO:</h3>
                    <p>Respuesta de la API futuro</p>

             <div className='footer-container'>
                     <img
                        src={UserIcon}
                        alt="usuario"
                        className='user-icon' />
                 
                     <input type="text" placeholder="¿Cómo te sientes con tu lectura de tarot?" className='input-history' />
             </div> 
            </div>
         
        </div>
      )}
    </div>
  );
};

export default PopupHistory;
