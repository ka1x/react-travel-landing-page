
import './booking.css';
import { booking } from '../../assets'; 

const Booking = () => {
	return (
		<section className='booking'>
				<img src={booking} alt='booking_background' className='booking-img' />
			<div className='form-container'>
				<h2>
					Book a <span> Flight</span> With Us Today
				</h2>
				<div className='form'>
					<div className='checkbox'>
						<input type='checkbox' id='one-way' />
						<label htmlFor='one-way'>One Way</label>
					</div>
					<div className='checkbox'>
						<input type='checkbox' id='two-way' />
						<label htmlFor='two-way'>Round Trips</label>
					</div>
            

				</div>
			</div>
		</section>
	);
};

export default Booking;
