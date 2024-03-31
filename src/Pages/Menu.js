import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Menu = () => {
	const navigate = useNavigate();
	return (
		<article className={`container menu`}>
			<Helmet>
                <title>Menu</title>
				<description>See the dishes offered at the Little Lemon Restaurant.</description>
            </Helmet>
			<div className="title">
				<h1>Menu</h1>
			</div>
			<div className="menu-container">
				<p className="menu__call-to-action">See what's available for dine-in orders!</p>
				Menu groupings component to go here
				
			</div>
		</article>
	);
};

export default Menu;