import './recommendations.scss';
import {logo, location} from '../../assets';
import {recs} from '../../constants';
import {Component} from 'react';
import PrevNextBtns from '../PrevNextBtns/PrevNextBtns';
import Logo from '../Logo/Logo';

class Recommendations extends Component {
   constructor(props) {
      super(props);
      this.state = {
         currentSlide: 0,
      };
   }

   nextSlide = () => {
      let newSlide = this.state.currentSlide === recs.length - 1 ? 0 : this.state.currentSlide + 1;
      this.setState({currentSlide: newSlide});
   };

   prevSlide = () => {
      let newSlide = this.state.currentSlide === 0 ? recs.length - 1 : this.state.currentSlide - 1;
      this.setState({currentSlide: newSlide});
   };

   render() {
      return (
         <section
            className='recommendations'
            id='recommendations'>
            <div className='title'>
               {/* <Logo /> */}

               <h2>
                  <span> Best</span> Recommendations
               </h2>
            </div>

            {recs.map((item, index) => (
               <div
                  className={index === this.state.currentSlide ? 'container' : 'container-hidden'}
                  key={index}>
                  <div className='front-container'>
                     <h3>{item.name}</h3>

                     <div className='location'>
                        <img
                           src={location}
                           className='icon'
                        />
                        <h4>{item.location}</h4>
                     </div>
                     <p>{item.desc}</p>
                  </div>
                  <div className='img-container'>
                     <img
                        src={item.img}
                        alt={item.name}
                        className={index === this.state.currentSlide ? 'rec-img' : 'rec-img-hidden'}
                     />

                     <PrevNextBtns
                        leftOnClick={this.prevSlide}
                        rightOnClick={this.nextSlide}
                     />
                  </div>
               </div>
            ))}
         </section>
      );
   }
}

export default Recommendations;
