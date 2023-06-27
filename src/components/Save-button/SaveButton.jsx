import React from 'react';
import './SaveButton.css';
import SaveIcons from '../../assets/img/save-icon.svg';

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
        <img className= 'img-save' src={SaveIcons} alt="This is the soundwave company logo" />
      </div>
    );
  }
}

export default SaveButton;
