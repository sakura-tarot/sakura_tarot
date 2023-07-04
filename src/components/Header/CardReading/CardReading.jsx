import React, { useState, useEffect } from 'react';
import '././CardReading.css';

function App() {
  const [cartas, setCartas] = useState([]);
  const [cartaPasado, setCartaPasado] = useState({});
  const [cartaPresente, setCartaPresente] = useState({});
  const [cartaFuturo, setCartaFuturo] = useState({});

  const getCartas = async () => {
    const response = await fetch('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/');
    const data = await response.json();
    setCartas(data.map(carta => ({ ...carta, seleccionada: false })));
  }

  const selectEntities = () => {
    if (cartas.length > 0) {
      const cartaPasadoIndex = Math.floor(Math.random() * cartas.length);
      let cartaPresenteIndex = Math.floor(Math.random() * cartas.length);
      let cartaFuturoIndex = Math.floor(Math.random() * cartas.length);
      while (cartaPresenteIndex === cartaPasadoIndex) {
        cartaPresenteIndex = Math.floor(Math.random() * cartas.length);
      }
      while (cartaFuturoIndex === cartaPasadoIndex || cartaFuturoIndex === cartaPresenteIndex) {
        cartaFuturoIndex = Math.floor(Math.random() * cartas.length);
      }
      setCartaPasado({ ...cartas[cartaPasadoIndex], volteada: true });
      setCartaPresente({ ...cartas[cartaPresenteIndex], volteada: true });
      setCartaFuturo({ ...cartas[cartaFuturoIndex], volteada: true });
    }
  }

  const voltearCarta = (carta) => {
    if (carta.seleccionada) {
      return;
    }

    if (carta === cartaPasado) {
      setCartaPasado({ ...cartaPasado, volteada: !cartaPasado.volteada, seleccionada: true });
    } else if (carta === cartaPresente) {
      setCartaPresente({ ...cartaPresente, volteada: !cartaPresente.volteada, seleccionada: true });
    } else if (carta === cartaFuturo) {
      setCartaFuturo({ ...cartaFuturo, volteada: !cartaFuturo.volteada, seleccionada: true });
    }
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
      <div className="card-categories"></div>
      <div className="cards-container">
        <div className={`card-container ${cartaPasado.seleccionada ? 'selected' : ''}`} onClick={() => voltearCarta(cartaPasado)}>
          <h3 className='texto'>Pasado</h3>
          <div className={cartaPasado.volteada ? "card-back" : "card-front"}>
            <img className="card-image" src={cartaPasado.volteada ? cartaPasado.cardsReverse.sakuraReverse : cartaPasado.sakuraCard} alt={cartaPasado.nombre} />
            {!cartaPasado.volteada && <p>{cartaPasado.meaning}</p>}
          </div>
        </div>
        <div className={`card-container ${cartaPresente.seleccionada ? 'selected' : ''}`} onClick={() => voltearCarta(cartaPresente)}>
          <h3 className='texto'>Presente</h3>
          <div className={cartaPresente.volteada ? "card-back" : "card-front"}>
            <img className="card-image" src={cartaPresente.volteada ? cartaPresente.cardsReverse.sakuraReverse : cartaPresente.sakuraCard} alt={cartaPresente.nombre} />
            {!cartaPresente.volteada && <p>{cartaPresente.meaning}</p>}
          </div>
        </div>
        <div className={`card-container ${cartaFuturo.seleccionada ? 'selected' : ''}`} onClick={() => voltearCarta(cartaFuturo)}>
          <h3 className='texto'>Futuro</h3>
          <div className={cartaFuturo.volteada ? "card-back" : "card-front"}>
            <img className="card-image" src={cartaFuturo.volteada ? cartaFuturo.cardsReverse.sakuraReverse : cartaFuturo.sakuraCard} alt={cartaFuturo.nombre} />
            {!cartaFuturo.volteada && <p>{cartaFuturo.meaning}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
