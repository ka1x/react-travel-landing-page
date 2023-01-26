import './hero.css';
import {stats} from '../../constants';

const Hero = () => {
	return (
		<div className='hero' id='home'>
			<div className='hero-bg'></div>
			<div className='hero-content'>
				<div className='hero-text'>
					<h1>
						Discover <span className='span-1'> New </span> <br /> <span className='span-2'>Experiences </span>
					</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet sem suspendisse tristique habitant consectetur cursus at. Leo in eget convallis nunc rhoncus nulla m</p>
				</div>
				<div className='btn-container'>
					<div className='line'></div>
					<button>
						<a href='#explore'>Explore</a>{' '}
					</button>
				</div>
			</div>

			<div className='hero-gallery'>
				<div className='img-box'>
				</div>
				<div className='img-box'>
				</div>
				<div className='img-box'>
				</div>
			</div>
			<div className='stats'>
				{stats.map((stat, index) => (
					<div key={index} className='stat'>
						<h3>{stat.title}</h3>
						<h2>{stat.value}</h2>
					</div>
				))}
			</div>
		</div>
	);
};

export default Hero;
