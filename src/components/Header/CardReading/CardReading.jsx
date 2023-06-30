import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [cartas, setCartas] = useState([]);
  const [cartaPasado, setCartaPasado] = useState({});
  const [cartaPresente, setCartaPresente] = useState({});
  const [cartaFuturo, setCartaFuturo] = useState({});

  const getCartas = async () => {
    const response = await fetch('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/');
    const data = await response.json();
    setCartas(data);
  }

  const selectEntities = () => {
    const cartaPasadoIndex = Math.floor(Math.random() * cartas.length);
    let cartaPresenteIndex = Math.floor(Math.random() * cartas.length);
    let cartaFuturoIndex = Math.floor(Math.random() * cartas.length);
    while (cartaPresenteIndex === cartaPasadoIndex) {
      cartaPresenteIndex = Math.floor(Math.random() * cartas.length);
    }
    while (cartaFuturoIndex === cartaPasadoIndex || cartaFuturoIndex === cartaPresenteIndex) {
      cartaFuturoIndex = Math.floor(Math.random() * cartas.length);
    }
    setCartaPasado(cartas[cartaPasadoIndex]);
    setCartaPresente(cartas[cartaPresenteIndex]);
    setCartaFuturo(cartas[cartaFuturoIndex]);
  }

  useEffect(() => {
    getCartas();
  }, []);

  useEffect(() => {
    if (cartas.length > 0) {
      selectEntities();
    }
  }, [cartas]);

  return (
    <div className="App">
      <h1>CARTAS SAKURA</h1>
      <div className="card-categories">
      </div>
      <div className="cards-container">
        <div className="card-container" onClick={() => selectEntities()}>
          <h3 className='texto'>Pasado</h3>
          <div className="card-front">
            <img src={cartaPasado.sakuraCard} alt={cartaPasado.nombre} />
          </div>
          <div className="card-back">
            <p>{cartaPasado.meaning}</p>
          </div>
        </div>
        <div className="card-container" onClick={() => selectEntities()}>
          <h3 className='texto'>Presente</h3>
          <div className="card-front">
            <img src={cartaPresente.sakuraCard} alt={cartaPresente.nombre} />
          </div>
          <div className="card-back">
            <p>{cartaPresente.meaning}</p>
          </div>
        </div>
        <div className="card-container" onClick={() => selectEntities()}>
          <h3 className='texto'>Futuro</h3>
          <div className="card-front">
            <img src={cartaFuturo.sakuraCard} alt={cartaFuturo.nombre} />
          </div>
          <div className="card-back">
            <p>{cartaFuturo.meaning}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
