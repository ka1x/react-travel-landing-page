import './prev-next-btns.scss';
import React from 'react';
import {arrow_left, arrow_right} from '../../assets';


const PrevNextBtns = ({leftOnClick, rightOnClick}) => {
	return (

		<div className='row'>
			<button onClick={leftOnClick}>
				<img src={arrow_left} alt='left' id='btn-left' />
			</button>
			<button onClick={rightOnClick}>
				<img src={arrow_right} alt='right' id='btn-right' />
			</button>
		</div>

);
};

export default PrevNextBtns;
