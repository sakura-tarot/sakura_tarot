import React, { useState, useEffect } from 'react';
import './CardReading.css';

function CardReading() { 
  const [cartaPasado, setCartaPasado] = useState({});
  const [cartaPresente, setCartaPresente] = useState({});
  const [cartaFuturo, setCartaFuturo] = useState({});

  useEffect(() => {
    const storedChosesCards = localStorage.getItem('mycards');
    if (storedChosesCards) {
      const mycards = JSON.parse(storedChosesCards);
      setCartaPasado({...mycards[0], volteada: true});
      setCartaPresente({...mycards[1], volteada: true});
      setCartaFuturo({...mycards[2], volteada: true});
    }
  }, []);
  console.log(cartaFuturo,cartaPasado,cartaPresente)

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
  };

  return (
    <div className="card-reading-container">
      <div id="card-reading-type" className={`cards-containers ${cartaPasado.seleccionada ? 'selected' : ''}`} onClick={() => voltearCarta(cartaPasado)}>
          <h3 className="cards-category-text">Pasado</h3>
          <div className={cartaPasado.volteada ? 'card-back' : 'card-front'}>
            <img
              className="cards-category-image"
              src={cartaPasado.volteada ? cartaPasado.cardsReverse.sakuraReverse : cartaPasado.sakuraCard}
              alt={cartaPasado.nombre}
            />
            {!cartaPasado.volteada && <p>{cartaPasado.meaning}</p>}
          </div>
      </div>

      <div id="card-reading-type" className={`cards-containers ${cartaPresente.seleccionada ? 'selected' : ''}`} onClick={() => voltearCarta(cartaPresente)}>
          <h3 className="cards-category-text">Presente</h3>
          <div className={cartaPresente.volteada ? 'card-back' : 'card-front'}>
            <img
              className="cards-category-image"
              src={cartaPresente.volteada ? cartaPresente.cardsReverse.sakuraReverse : cartaPresente.sakuraCard}
              alt={cartaPresente.nombre}
            />
            {!cartaPresente.volteada && <p>{cartaPresente.meaning}</p>}
          </div>
      </div>
        
      <div id="card-reading-type" className={`cards-containers ${cartaFuturo.seleccionada ? 'selected' : ''}`} onClick={() => voltearCarta(cartaFuturo)}>
          <h3 className="cards-category-text">Futuro</h3>
          <div className={cartaFuturo.volteada ? 'card-back' : 'card-front'}>
            <img
              className="cards-category-image"
              src={cartaFuturo.volteada ? cartaFuturo.cardsReverse.sakuraReverse : cartaFuturo.sakuraCard}
              alt={cartaFuturo.nombre}
            />
            {!cartaFuturo.volteada && <p>{cartaFuturo.meaning}</p>}
          </div>
      </div>
    </div>
  );
}

export default CardReading;