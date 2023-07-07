import React, { useState, useEffect } from 'react';
import './Cards.css';
import GetRandomCards from '../../services/GetRandomCards';
import StartConsultation from '../Start-Consultation/StartConsultation';

function Cards() {
    const [cardInfo, setCardInfo] = useState([])
	const [chosesCards, setChosesCards] = useState([]);
	const [showResult, setShowResult] = useState(false);
	const [error, setError] = useState('');
	const [shouldShuffle, setShouldShuffle] = useState(true);

     useEffect(()=>{
        GetRandomCards.getAll()
        .then(response =>{ 
                setCardInfo(response)
				setShouldShuffle(true);
        })
		.catch(
			setError('Lo sentimos, no se pudo encontrar ninguna carta 😥')
		)
    }, [setCardInfo])

	useEffect(() => {
		if (shouldShuffle) {
		  const mixedCards = [...cardInfo];
		  for (let i = mixedCards.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[mixedCards[i], mixedCards[j]] = [mixedCards[j], mixedCards[i]];
		  }
		  setCardInfo(mixedCards);
		  setShouldShuffle(false);
		}
	  }, [shouldShuffle, cardInfo]);

	const HandleCardClick = (cardIndex) => {
		if (chosesCards.length < 3 && !chosesCards.includes(cardIndex)) {
			const updatedChosesCards = [...chosesCards, cardInfo[cardIndex]];
			setChosesCards(updatedChosesCards);
			localStorage.setItem('mycards', JSON.stringify(updatedChosesCards));
		}

		if (chosesCards.length === 2) {
			setShowResult(true);
		}
	};

	return (
		<div className='deck-container'>
			<div className='cards-container'>
				{cardInfo.map((card, index) => (
					<div className='card-container' key={index}>
						<img src={card.cardsReverse.sakuraReverse } alt="Reverse Sakura Card" onClick={() => HandleCardClick(index)}/>
					</div>
				))}
			</div>

			<div className="selected-cards-container">
				<div className="choses-cards-container">
					{chosesCards.map((cardIndex, index) => (
						<div className="choses-cards-container" key={index}>
							<img src={cardIndex.cardsReverse.sakuraReverse } alt="Clicked Card" className="clicked-card"/>
						</div>
					))}
				</div>

				{showResult && <StartConsultation />}
			</div>	  
		</div>
	)
}

export default Cards