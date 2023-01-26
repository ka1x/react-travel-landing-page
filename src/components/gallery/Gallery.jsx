import './gallery.css';
import {hero_1, hero_2, hero_3} from '../../assets';


import React from 'react';

const Gallery = () => {
	return (
		<div className='hero-gallery'>
			<div className='img-box'>
				<img src={hero_2} alt='image_2' className='img ' />
			</div>
			<div className='img-box'>
				<img src={hero_1} alt='image_1' className='img ' />
			</div>
			<div className='img-box'>
				<img src={hero_3} alt='image_3' className='img ' />
			</div>
		</div>
	);
};

export default Gallery;
