/* import React, { useState } from 'react';
import './CommentPopup.css';

const PopupComment = ({ saveContent, updateConsoleLog }) => {
  const [inputValue, setInputValue] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [consoleLog, setConsoleLog] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddClick = () => {
    setConsoleLog('Agregar: ' + inputValue);
    saveContent(inputValue);
    updateConsoleLog('Agregar: ' + inputValue); // Actualiza el estado consoleLog en PopupHistory
  };

  const handleTogglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <button onClick={handleTogglePopup} className='button-save'>
        GUARDAR
      </button>

      {showPopup && (
        <div className="popup-container">
          <div className="popup-content">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="¿Cómo te sientes con tu lectura de tarot?"
              className='input-popup'
            />
            <button onClick={handleAddClick} className='button-add'>Agregar</button>
          </div>
        </div>
      )}
{/* 
      <p>{consoleLog}</p> }
    </div>
  );
};

export default PopupComment;
 */

import React, { useState } from 'react';
import './CommentPopup.css';

const PopupComment = ({ saveContent, updateConsoleLog }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddClick = () => {
    const log = inputValue;
    saveContent(inputValue);
    updateConsoleLog(log);
  };

  return (
    <div>
      <button className='button-save'>GUARDAR</button>

      <div className="popup-container">
        <div className="popup-content">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="¿Cómo te sientes con tu lectura de tarot?"
            className='input-popup'
          />
          <button onClick={handleAddClick} className='button-add'>Agregar</button>
        </div>
      </div>
    </div>
  );
};

export default PopupComment;

