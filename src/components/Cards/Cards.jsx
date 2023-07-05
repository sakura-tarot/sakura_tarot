import React, { useState, useEffect } from 'react';
import './Cards.css';
import GetRandomCards from '../../services/GetRandomCards';
import StartConsultation from '../Start-Consultation/StartConsultation';

function Cards() {
    const [cardInfo, setCardInfo] = useState([])
	const [chosesCards, setChosesCards] = useState([]);
	const [showResult, setShowResult] = useState(false);
	const [error, setError] = useState('');

     useEffect(()=>{
        GetRandomCards.getAll()
        .then(response =>{ 
                setCardInfo(response)
        })
		.catch(
			setError('Lo sentimos, no se pudo encontrar ninguna carta 😥')
		)
    }, [setCardInfo])

	const HandleCardClick = (cardIndex) => {
		if (chosesCards.length < 3 && !chosesCards.includes(cardIndex)) {
			setChosesCards([...chosesCards, cardIndex]);
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
						<img src={card.cardsReverse.sakuraReverse} alt="Reverse Sakura Card" onClick={() => HandleCardClick(index)}/>
					</div>
				))}
			</div>

			<div className='deck-container'>
			 <div className="selected-cards-container">
				{chosesCards.map((cardIndex, i) => (
					<div key={i}>
						<img src={cardIndex}
						alt="Clicked Card"
						className="clicked-card"
						/>
					</div>
				))}
				
				{showResult && <StartConsultation />}
			</div>  
		</div>
		</div>
	)
}

export default Cards