import './index.css';
import {Navbar, Hero, Partners, Explore, Services, Booking, Recommendations, Reviews, Footer, Contact} from './components';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Hero />
			<Partners />
			<Explore/>
			<Recommendations />
			<Booking />
			<Services />
			<Reviews />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
