/*    import React, { useState } from 'react';
import './HistoryPopup.css';
import CloseIcon from '../../../assets/img/close-icon-purple.svg';
import UserIcon from '../../../assets/img/user-icon.svg'
import SaveIcons from '../../../assets/img/save-icon.svg';



const PopupHistory = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
        <img className= 'img-save' src={SaveIcons} alt="This is the soundwave company logo" onClick={handlePopupToggle} />
      

      {isPopupOpen && (
        <div className="popup-history-container">
                <h2>HISTORIAL</h2>
                <img
                    src={CloseIcon}
                    alt="Cerrar"
                    onClick={handlePopupToggle} 
                    className='close-container'/>

          <div className="popup-box">
        
                <div className='box-container'>
                    <h3>PASADO:</h3>
                    <p>lectura pasado</p>

                    <h3>PRESENTE:</h3>
                    <p>lectura presente</p>

                    <h3>FUTURO:</h3>
                    <p>lectura futuro</p>
                </div>
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

 */

import React, { useState } from 'react';
import './HistoryPopup.css';
import CloseIcon from '../../../assets/img/close-icon-purple.svg';
import UserIcon from '../../../assets/img/user-icon.svg';
import SaveIcons from '../../../assets/img/save-icon.svg';
import PopupComment from '../CommentPopup/CommentPopup';


const PopupHistory = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [consoleLog, setConsoleLog] = useState('');

  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleUpdateConsoleLog = (log) => {
    setConsoleLog(log);
  };

  const handleSaveContent = (content) => {
    // Aquí puedes manejar el contenido guardado, si es necesario
    console.log('Contenido guardado:', content);
  };

  return (
    <div>
      <img className='img-save' src={SaveIcons} alt="This is the soundwave company logo" onClick={handlePopupToggle} />

      {isPopupOpen && (
        <div className="popup-history-container">
          <h2>HISTORIAL</h2>
          <img src={CloseIcon} alt="Cerrar" onClick={handlePopupToggle} className='close-container' />

          <div className="popup-box">
            <div className='box-container'>
              <h3>PASADO:</h3>
              <p>lectura pasado</p>

              <h3>PRESENTE:</h3>
              <p>lectura presente</p>

              <h3>FUTURO:</h3>
              <p>lectura futuro</p>
            </div>
            <div className='footer-container'>
              <img src={UserIcon} alt="usuario" className='user-icon' />
              <input type="text" placeholder="¿Cómo te sientes con tu lectura de tarot?" className='input-history' value={consoleLog} />
            </div>
          </div>
        </div>
      )}

      <PopupComment saveContent={handleSaveContent} updateConsoleLog={handleUpdateConsoleLog} />
      
    </div>
  );
};

export default PopupHistory;
