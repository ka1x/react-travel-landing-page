import React, {Component} from 'react';
import {logo, close, menu} from '../../assets';
import {navLinks} from '../../constants';
import './navbar.scss';
import Logo from '../Logo/Logo';

class Navbar extends Component {
   state = {navOpened: false};

   handleClick = () => {
      this.setState({navOpened: !this.state.navOpened});
   };

   render() {
      return (
         <>
            {this.state.navOpened ? <div className='nav-overlay'> </div> : <></>}

            <nav className={this.state.navOpened ? 'nav mobile-opened' : 'nav'}>
               {/* <img src={logo} alt='TRAVEL' className='nav-logo' /> */}
               <Logo type='nav-logo'/>

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

               {/* <a href='#' className='join-link'>
                  Join Us
               </a> */}

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
