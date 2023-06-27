import React from 'react';
import './CommentPopup.css';

class PopupComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '' // Valor del campo de texto
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value }); // Actualizar el valor del campo de texto
  };

  handleAddClick = () => {
    // Lógica para manejar el clic en el botón "Agregar"
    console.log('Agregar:', this.state.inputValue);
    // Aquí puedes realizar acciones adicionales, como enviar el valor a través de props o llamar a una función de guardar, etc.
  };

  render() {
    return (
      <div className="popup-container">
            <div className="popup-content">
                    <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    placeholder="¿Cómo te sientes con tu lectura de tarot?"
                    className='input-popup'
                    />
                
                <button onClick={this.handleAddClick} className='button-add'>Agregar</button>
            </div>
      </div>
    );
  }
}

export default PopupComment;
