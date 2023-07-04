
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

