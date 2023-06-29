import './Cards.css';
import ReverseSakuraCard from '../../assets/img/Reverso-Sakura.jpg';

const cards = [
	ReverseSakuraCard,
	ReverseSakuraCard,
	ReverseSakuraCard,
	ReverseSakuraCard
]

function Cards() {
	return (
		<div className='deck-container'>
			{cards.map((card, index) => (
				<div className='card-container' key={index}>
					<img src={card} alt="Reverse Sakura Card" />
				</div>
			))}
		</div>
	)
}

export default Cards