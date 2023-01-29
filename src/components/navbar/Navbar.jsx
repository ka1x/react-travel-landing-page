import React, {Component} from 'react';
import {logo, close, menu} from '../../assets';
import {navLinks} from '../../constants';
import './navbar.css';

class Navbar extends Component {
	state = {clicked: false};

	handleClick = () => {
		this.setState({clicked: !this.state.clicked});
	};

	render() {
		return (
			<nav className={this.state.clicked ? 'nav mobile-opened' : 'nav'}>
				<img src={logo} alt='TRAVEL' className='nav-logo' />

				<ul className='links'>
					{navLinks.map((link, index) => {
						return (
							<li className='links-item' key={link.id}>
								<a href={`#${link.id}`} className='link' onClick={this.state.clicked ? this.handleClick : null}>
									{link.title}
								</a>
							</li>
						);
					})}
				</ul>
				<a href='#' className='join-link'>
					Join Us
				</a>
				<button className={this.state.clicked ? 'close-btn' : 'menu-btn'}>
					<img src={this.state.clicked ? close : menu} alt='navbar_button' onClick={this.handleClick} />
				</button>
			</nav>
		);
	}
}

export default Navbar;
