import React from 'react';
import {logo} from '../../assets';
import {navLinks} from '../../constants';
import './navbar.css'

const Navbar = () => {
	return (
		<nav className='nav'>
			<img src={logo} alt='TRAVEL' className='nav-logo' />
			<ul className='links'>
				{navLinks.map((link, index) => {
					return <li className='links-item' key={link.id}>
                        <a href={`#${link.id}`} className='link'>{link.title}</a>
                    </li>;
				})}
			</ul>
            <a href="#" className='join-link'>Join Us</a>
		</nav>
	);
};

export default Navbar;
