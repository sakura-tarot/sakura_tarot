import React from 'react';
import './SaveButton.css';
import SaveIcons from '../../assets/img/save-icon.svg';
import PopupHistory from '../PopPup/HistoryPopup/HistoryPopup';

class SaveButton extends React.Component {
  handleClick = () => {
    // Lógica para guardar aquí
    console.log('Guardar');
  };

  render() {
    return (
      <div className='save-button-container'>
        <button onClick={this.handleClick} className='button-save'>
          GUARDAR
        </button>
      
        <PopupHistory />
       
      </div>
    );
  }
}

export default SaveButton;
