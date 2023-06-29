
 /* import React, { useState } from 'react';
import './SaveButton.css';
import PopupHistory from '../PopPup/HistoryPopup/HistoryPopup';
import PopupComment from '../PopPup/CommentPopup/CommentPopup';

const SaveButton = () => {
  const [showPopupComment, setShowPopupComment] = useState(false);

  const handleClick = () => {
    // Lógica para guardar aquí
    console.log('Guardar');
    setShowPopupComment(true);
  };

  return (
    <div className='save-button-container'>
      <button onClick={handleClick} className='button-save'>
       GUARDAR
      </button>

      {showPopupComment && <PopupComment />}
      <PopupHistory />
    </div>
  );
};

export default SaveButton;
 */
import React, { useState } from 'react';
import './SaveButton.css';
import PopupComment from '../PopPup/CommentPopup/CommentPopup';
import PopupHistory from '../PopPup/HistoryPopup/HistoryPopup';


const SaveButton = () => {
  return (
    <div>
     <PopupComment />
    <PopupHistory />
    </div>
  );
};

export default SaveButton;
