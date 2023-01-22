import './recommendations.css';
import {logo, location} from '../../assets';
import {arrow_left, arrow_right} from '../../assets';
import {recs} from '../../constants';
import { Component } from 'react';

class Recommendations extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSlide: 0,
		};
	}

	nextSlide = () => {
		let newSlide = this.state.currentSlide === recs.length - 1 ? 0 : this.state.currentSlide + 1;
		this.setState({currentSlide: newSlide});
	};

	prevSlide = () => {
		let newSlide = this.state.currentSlide === 0 ? recs.length - 1 : this.state.currentSlide - 1;
		this.setState({currentSlide: newSlide});
	};

	render() {
		return (
			<section className='recommendations'>
				<div className='title'>
					<img src={logo} alt='TRAVEL' />

					<h2>
						<span> Best</span> Recommendations
					</h2>
				</div>

				{recs.map((item, index) => (
					<div className={index === this.state.currentSlide ? 'container' : 'container-hidden'} key={index}>
						<div className='img-container'>
							<img src={item.img} alt={item.name} className='rec-img' />

							<div className='row'>
							<button onClick={this.prevSlide}>
									<img src={arrow_left} alt='left' id='btn-left' />
								</button>
								<button onClick={this.nextSlide}>
									<img src={arrow_right} alt='right' id='btn-right' />
								</button>
							</div>
						</div>

						<div className='front-container'>
							<h3>{item.name}</h3>

							<div className='location'>
								<img src={location} className='icon' />
								<h4>{item.location}</h4>
							</div>
							<p>{item.desc}</p>
						</div>
					</div>
				))}
			</section>
		);
	}
}

export default Recommendations;
