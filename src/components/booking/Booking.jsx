import './booking.css';
import {booking, location, profile, calendar, star} from '../../assets';
import {SubmitBtn} from '../';

const Booking = () => {
	return (
		<section className='booking' id='booking'>
			<img src={booking} alt='booking_background' className='booking-img' />
			<div className='right-side'>
				<h2>
					Book a <span> Flight</span> With Us Today
				</h2>
				<form className='form'>
					<div className='form-container'>
						<div className='checkbox'>
							<input type='radio' name='trip-type' id='one-way' />
							<label htmlFor='one-way'>One Way</label>
						</div>
						<div className='checkbox'>
							<input type='radio' name='trip-type' id='two-way' />
							<label htmlFor='two-way'>Round Trip</label>
						</div>
						<div className='input-box wide'>
							<img src={location} className='icon' />
							<input type='text' placeholder='Leaving from...' id='location_from' name='location_from' />
						</div>
						<div className='input-box wide'>
							<img src={location} className='icon' />
							<input type='text' placeholder='Going to...' id='location_to' name='location_to' />
						</div>
						<div className='input-box '>
							<img src={calendar} className='icon' />
							<input type='date'  placeholder='Depart' id='date_from' name='date_from' />
						</div>
						<div className='input-box '>
							<img src={calendar} className='icon' />
							<input type='date' placeholder='Return' id='date_to' name='date_to' />
						</div>
						<div className='input-box '>
							<img src={profile} className='icon' />
							<input type='number' placeholder='2 Passengers' id='people' name='people' min={1} />
						</div>
						<div className='input-box  '>
							<img src={star} className='icon' />
							<input type='number' placeholder='1st Class' id='class' name='class' min={1} max={3} />
						</div>
					</div>
					<SubmitBtn text={'Search available flights'} cname='button--full'></SubmitBtn>
				</form>
			</div>
		</section>
	);
};

export default Booking;
