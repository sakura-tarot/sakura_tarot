
import React, { useState } from 'react';
import './CommentPopup.css';
//Cambiar class por funcional y en console lo almaceno dentro de un estado
const PopupComment = ({ saveContent }) => {
  const [inputValue, setInputValue] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddClick = () => {
    console.log('Agregar:', inputValue);
    saveContent(inputValue); // Llama a la función saveContent y pasa el valor del input
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
    </div>
  );
};

const ParentComponent = () => {
  const [content, setContent] = useState('');

  const saveContent = (value) => {
    setContent(value); // Actualiza el estado content con el valor recibido desde PopupComment
  };

  return (
    <div>
      <PopupComment saveContent={saveContent} />
      <div>{content}</div> {/* Muestra el contenido guardado */}
    </div>
  );
};

export default ParentComponent;
