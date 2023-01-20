
import './explore.css'
import {cards, packages} from '../../constants';

import PackageCard from '../package-card/PackageCard';

const Explore = () => {
  return (
<section className="explore" id='explore'>
    <div className="explore-desc">
        <h2><span> Explore </span>The World</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet sem suspendisse tristique habitant consectetur cursus at. Leo in eget convallis nunc rhoncus nulla m</p>

        <input type="text" className='explore-search'  placeholder='Search for Tourist centers, locations'/>
    </div>

    <div className="explore-heading">
        <h3>Popular Searches</h3>
        <div className="line"></div>
    </div>

    <div className="card-container">
        {/* <PackageCard data={cards}/> */}
        <PackageCard data={packages}/>


    </div>

<div className="see-more">

    <a href="">See More</a>
    <div className="line"></div>
</div>
</section>  )
}

export default Explore