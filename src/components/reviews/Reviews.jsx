import './reviews.css';
import {location, arrow_left, arrow_right} from '../../assets';

const Reviews = () => {
	return (
		<section className='reviews'>
			<h1>Tourist Experiences</h1>

			<div className='review-container'>
				<div className='img-container'>
					<img src='../../src/assets/person-1.png' alt='' />
				</div>
				<div className='desc-container'>
					<div className='name'>
						<h3>Alemayehu Mitzi</h3>
						<div className='location'>
							<img src={location} alt='location' />
							<h4>Germany </h4>
						</div>
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur molestiae commodi laborum aspernatur, qui ea eius quas? Dolores architecto doloribus ratione, quas sapiente accusantium eius iure eligendi, mollitia, modi veniam culpa aliquid nesciunt aliquam. Culpa, eum molestiae nostrum dicta ut amet commodi explicabo fugit suscipit voluptatibus repudiandae alias blanditiis, dolorem eligendi aperiam inventore, veniam impedit. Expedita voluptatum obcaecati, blanditiis dolores beatae voluptatem tempora et cumque magnam consectetur exercitationem corrupti est!</p>
					</div>
					<p className='stars'>5 * * * * *</p>
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
		</section>
	);
};

export default Reviews;
