import './Description.css';
import MagicWand from '../../assets/img/magic-wand.svg';

function Description({text}) {
	return (
	<div className='description-container'>
		<img src={MagicWand} alt="Magic Wand" />
		<p className="description">{text}</p>
	</div>
	)
}

export default Description