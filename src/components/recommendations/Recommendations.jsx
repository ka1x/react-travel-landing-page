import './recommendations.css';
import {logo, location} from '../../assets';
import {recommendations, arrow_left, arrow_right} from '../../assets';

const Recommendations = () => {
	return (
		<section className='recommendations'>
			<div className='img-container'>
				<div className='title'>
					<img src={logo} alt='TRAVEL' />

					<h2>
						<span> Best</span> Recommendations
					</h2>
				</div>

				<img src={recommendations} alt='' className='rec-img' />

				<div className='row'>
					<button>
						<img src={arrow_left} alt='left' id='btn-left' />
					</button>
					<button>
						<img src={arrow_right} alt='right' id='btn-right' />
					</button>
				</div>
			</div>

			<div className='front-container'>
				<h3>location name</h3>

				<div className='location'>
					<img src={location} className='icon' />
					<h4>desc</h4>
				</div>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatum maxime, consectetur repellat, mollitia illum magnam aut nulla possimus vel iste nisi voluptatem modi corrupti aspernatur, expedita autem commodi vero.</p>

			</div>
		</section>
	);
};

export default Recommendations;
