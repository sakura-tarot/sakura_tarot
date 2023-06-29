import './HomePage.css';
import Description from '../../components/Description/Description';
import Cards from '../../components/Cards/Cards';

function HomePage() {
	return (
		<main>
			<Description text="Concentrate y elige 3 cartas." />
			<Cards />
		</main>
	)
}

export default HomePage