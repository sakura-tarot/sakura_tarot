import React, { useState } from 'react';
import './Cards.css';
import ReverseSakuraCard from '../../assets/img/Reverso-Sakura.jpg';
import StartConsultation from '../Start-Consultation/StartConsultation';

const cards = [
	ReverseSakuraCard,
	ReverseSakuraCard,
	ReverseSakuraCard,
	ReverseSakuraCard
]

function Cards() {
	const [selectedCards, setSelectedCards] = useState([]);
	const [showResult, setShowResult] = useState(false);

	const handleCardClick = (cardIndex) => {
		if (selectedCards.length < 3 && !selectedCards.includes(cardIndex)) {
			setSelectedCards([...selectedCards, cardIndex]);
		}

		if (selectedCards.length === 2) {
			setShowResult(true);
		}
	};

	return (
		<div className='deck-container'>
			<div className='cards-container'>
			{cards.map((card, index) => (
				<div className='card-container' key={index}>
					<img src={card} alt="Reverse Sakura Card" onClick={() => handleCardClick(index)} />
				</div>
			))}
			</div>
			<div className="selected-cards-container">
				{selectedCards.map((cardIndex) => (
				<img
				src={cards[cardIndex]}
				alt="Clicked Card"
				className="clicked-card"
				key={cardIndex}
				/>
				))}
				{showResult && <StartConsultation />}
			</div>
		</div>
	)
}

export default Cards