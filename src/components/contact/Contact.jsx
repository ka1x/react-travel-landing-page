import React from 'react';
import './contact.css';
import {socials} from '../../constants';

const Contact = () => {
	return (
		<section className='contact'>
			<h2>Get in Touch With Us</h2>

			<div className='contact-info'>
				<h3>Contact info</h3>

				<p>Phone: +234 706338**</p>
				<p>Email: Stephenolushola5@gmail.com</p>
				<p>Socials</p>
				<div className='socials-container'>
					{socials.map((social) => (
						<img src={social.logo} alt={social.alt} key={social.id} />
					))}
				</div>
			</div>

			<form action='' className='form-message'>
				<h3>Send us a message</h3>

				<div className='input-container'>
					<input type='text' placeholder='First name' name='message-name' id='message-name' />
					<input type='text' placeholder='Last name' name='message-surname' id='message-surname' />
					<input type='text' placeholder='Your email' name='message-email' id='message-email' />
					<textarea rows='5' cols='60' type='text' placeholder='Message' name='message-content' id='message-content' />
				</div>
				<input type='submit' value='Send' />
			</form>
		</section>
	);
};

export default Contact;
