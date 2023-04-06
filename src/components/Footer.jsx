import React from 'react';
import '../styles/footer.css';
import {logo} from '../assets';
import {footer_links} from '../constants';
import {SubmitBtn} from '.';

const Footer = () => {
	return (
		<section className='footer'>
			<div className='subscribe'>
				<img src={logo} alt='' className='' />
				<p>Subscribe to stay</p>

				<form action='' className='subscribe-form'>
					<input type='text' name='subscribe-email' id='subscribe-email' placeholder='Enter your email Address' />
					<SubmitBtn text={'Subscribe'} />
				</form>
				<div className='line'></div>
			</div>

			<div className='footer-links'>
				<p className='copyright'>© 2022 All Rights Reserved</p>

				<div className='links-container'>
					{footer_links.map((link) => (
						<a href={link.href} key={link.id}>
							{link.text}
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default Footer;
