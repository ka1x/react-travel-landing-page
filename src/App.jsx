import './index.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Partners from './components/Partners/Partners';
import Explore from './components/Explore/Explore';
import Services from './components/Services/Services';
import Booking from './components/Booking/Booking';
import Recommendations from './components/Recommendations/Recommendations';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

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
