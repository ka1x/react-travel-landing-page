import './packagecard.css';
import {heart, location} from '../../assets';

const PackageCard = ({data}) => {
	return (
		<div className='card'>
			{data.map((card) => (
				<div className='card-body' id={card.id} key={card.id}>
					<img src={card.image} alt={card.title} className='card-img' />

					<div className='card-content'>
						<div className='info'>
							<div className='desc'>
								<h3>{card.title}</h3>
								<div className='location'>
									<img src={location} className='icon' />
									<h4>{card.desc}</h4>
								</div>
							</div>
							<div className='info-likes'>
								<img src={heart} alt='likes' className='icon heart' />
								<p>{card.likes}</p>
							</div>
						</div>
						{card.hasOwnProperty('info') ? <p>{card.info}</p> : null}
					</div>
				</div>
			))}
			s{' '}
		</div>
	);
};

export default PackageCard;
