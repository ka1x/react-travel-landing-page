import './reviews.css';
import {location, arrow_left, arrow_right} from '../../assets';
import {reviews} from '../../constants';
import {Component} from 'react';

// const Reviews = () => {
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
					<div className={index === this.state.currentSlide ? 'review-container' : 'review-container-hidden'} key={index}>
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
							<div className='row'>
								<button onClick={this.prevSlide}>
									<img src={arrow_left} alt='left' id='btn-left' />
								</button>
								<button onClick={this.nextSlide}>
									<img src={arrow_right} alt='right' id='btn-right' />
								</button>
							</div>
						</div>
					</div>
				))}
			</section>
		);
	}
}

export default Reviews;
