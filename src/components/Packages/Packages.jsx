import './packages.scss';
import {packages} from '../../constants';
import PackageCard from '../PackageCard/PackageCard';

const Packages = () => {
	return (
		<section className='packages'>
			<h3>
				<span> Free</span> Packages
			</h3>
			<p>Join our communities to stand a chance to win our free offers to one of these tourist centers.</p>

			<div className='cards-container'>
				{packages.map((card) => (
					<div className='card' key={packages.key}>
						<PackageCard card={packages} />
					</div>
				))}
			</div>
		</section>
	);
};

export default Packages;
