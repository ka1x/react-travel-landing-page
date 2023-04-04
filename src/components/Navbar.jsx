import React, {Component} from 'react';
import {logo, close, menu} from '../assets';
import {navLinks} from '../constants';
import '../styles/navbar.css';

class Navbar extends Component {
   state = {navOpened: false, loginOpened: false};

   handleClick = () => {
      this.setState({clicked: !this.state.navOpened});
   };

   handleLoginOpen = () => {
      this.setState({clicked: !this.state.loginOpened});
   };

   render() {
      return (
         <>


            <nav className={this.state.navOpened ? 'nav mobile-opened' : 'nav'}>
               <img src={logo} alt='TRAVEL' className='nav-logo' />
             

               <ul className='links'>
                  {navLinks.map((link) => {
                     return (
                        <li className='links-item' key={link.id}>
                           <a href={`#${link.id}`} className='link' onClick={this.state.navOpened ? this.handleClick : null}>
                              {link.title}
                           </a>
                        </li>
                     );
                  })}
               </ul>

               <a href='#' className='join-link'>
                  Join Us
               </a>

               <button className='menu-btn'>
                  <img src={menu} alt='navbar_button' onClick={this.handleClick} />
               </button>

               {this.state.navOpened ? (
                  <button className='close-btn'>
                     <img src={close} alt='close_button' onClick={this.handleClick} />
                  </button>
               ) : (
                  <></>
               )}
            </nav>
         </>
      );
   }
}

export default Navbar;
