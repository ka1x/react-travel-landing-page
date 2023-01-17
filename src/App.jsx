import {useState} from 'react';
import './App.css';
import {Navbar, Hero, Partners, Explore, Services, Booking, Packages, Recommendations, Reviews, Footer, Contact} from './components';

function App() {
	return (
		<div className='App'>
			{/* <Navbar /> */}
			{/* <Hero /> */}
			{/* <Partners /> */}
			{/* <Explore/> */}
			{/* <Services /> */}
			{/* <Booking /> */}
			{/* <Recommendations /> */}
			<Reviews />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
