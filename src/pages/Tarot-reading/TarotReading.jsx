import React from 'react';
import SaveButton from '../../components/Save-button/SaveButton';
import PopupComment from '../../components/PopPup/CommentPopup/CommentPopup';
import PopupHistory from '../../components/PopPup/HistoryPopup/HistoryPopup';


const TarotReading = () => {
  return (
    <div>
    
      <SaveButton />
      <PopupComment />
      <PopupHistory />
    </div>
  );
};

export default TarotReading;
