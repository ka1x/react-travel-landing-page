import '../styles/hero.css';
import {stats} from '../constants';
import {Gallery} from '.';

const Hero = () => {
   return (
      <div
         className='hero'
         id='home'
      >
         <div className='hero-content'>
            <div className='hero-container'>
               <div className='hero-text'>
                  <h1>
                     Discover <span className='span-1'> New </span> <br /> <span className='span-2'>Experiences </span>
                  </h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet sem suspendisse tristique habitant consectetur cursus at. Leo in eget convallis nunc rhoncus nulla m</p>
               </div>

               <div className='btn-container'>
                  <div className='line'></div>

                  <a href='#explore '>
                     <i class='fa-solid fa-chevron-down'></i>
                  </a>
               </div>
            </div>
         </div>

         <Gallery />
         <div className='stats'>
            {stats.map((stat, index) => (
               <div
                  key={index}
                  className='stat'
               >
                  <h3>{stat.title}</h3>
                  <h2>{stat.value}</h2>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Hero;
