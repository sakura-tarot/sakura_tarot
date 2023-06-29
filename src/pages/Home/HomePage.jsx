import './HomePage.css';
import Description from '../../components/Description/Description';
import Cards from '../../components/Cards/Cards';
import HomeHeader from "../../components/Header/HomeHeader/HomeHeader"
import StartConsultation from "../../components/Start-Consultation/StartConsultation"

function HomePage() {
	return (
		<>
			<HomeHeader />
			<Description text="Concentrate y elige 3 cartas." />
			<Cards />
			<StartConsultation/>
		</>
	)
}

export default HomePage