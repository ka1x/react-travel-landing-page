import './services.scss';
import {logo} from '../../assets';
import {services} from '../../constants';

const Services = () => {
	return (
		<section className='services' id='about-us'>
			<div className='title'>
				<img src={logo} alt='logo' className='logo' />
				<h1>Services</h1>
			</div>

			<div className='card-container'>
				{services.map((service) => {
					return (
						<div className='card' key={service.id}>
							<div className='service-bg'>
								<h1>{`0${service.id}`}</h1>
								<img src={service.img} alt={service.title} />
							</div>

							<div className='service-desc'>
								<h3>{service.title}</h3>
								<p>{service.desc}</p>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Services;
