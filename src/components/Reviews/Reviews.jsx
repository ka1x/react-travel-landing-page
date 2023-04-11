import './reviews.scss';
import {location} from '../../assets';
import {reviews} from '../../constants';
import {Component} from 'react';
import PrevNextBtns from '../PrevNextBtns/PrevNextBtns';

class Reviews extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSlide: 0,
		};
	}

	nextSlide = () => {
		let newSlide = this.state.currentSlide === reviews.length - 1 ? 0 : this.state.currentSlide + 1;
		this.setState({currentSlide: newSlide});
	};

	prevSlide = () => {
		let newSlide = this.state.currentSlide === 0 ? reviews.length - 1 : this.state.currentSlide - 1;
		this.setState({currentSlide: newSlide});
	};

	render() {
		return (
			<section className='reviews'>
				<h1>Tourist Experiences</h1>

				{reviews.map((review, index) => (

					<div key={index} className={index === this.state.currentSlide ? 'review-container' : 'review-container-hidden'} >
						<div className='img-container'>
							<img src={review.photo} alt='profile_photo' className='review-img' />
						</div>

						<div className='desc-container'>
							<div className='name'>
								<h3>{review.name}</h3>
								<div className='location'>
									<img src={location} alt='location' />
									<h4>{review.location} </h4>
								</div>
								<p className='content'>{review.review}</p>
							</div>
							<p className='stars'>{review.stars}</p>

							<div className='slider'></div>
							
				
						<PrevNextBtns leftOnClick={this.prevSlide} rightOnClick={this.nextSlide} />
						</div>
					</div>

				))}
			</section>
		);
	}
}

export default Reviews;
