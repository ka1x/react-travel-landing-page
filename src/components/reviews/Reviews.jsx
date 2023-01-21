import './reviews.css';
import {location, arrow_left, arrow_right} from '../../assets';
import { reviews } from '../../constants';

const Reviews = () => {
	return (
		<section className='reviews'>
			<h1>Tourist Experiences</h1>

		{reviews.map((review) => (

			<div className='review-container' key={review.id}>
					<img src={review.photo} alt='profile_photo' className='review-img' />

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
						<button>
							<img src={arrow_left} alt='left' id='btn-left' />
						</button>
						<button>
							<img src={arrow_right} alt='right' id='btn-right' />
						</button>
					</div>
				</div>
			</div>
					))}

		</section>
	);
};

export default Reviews;
