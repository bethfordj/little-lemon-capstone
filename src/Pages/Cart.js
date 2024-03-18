import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Cart = () => {
	const navigate = useNavigate();
	return (
		<div className="container">
			<Helmet>
                <title>Login</title>
				<description>Login to see your account.</description>
            </Helmet>
			<div className="title">
				<h1>About</h1>
			</div>
			<div className="about-container">
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
					eos tenetur beatae nihil dolorum possimus voluptate esse voluptatibus,
					aliquid ratione facere enim eveniet modi necessitatibus quas
					asperiores pariatur, amet velit?
				</p>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
					eos tenetur beatae nihil dolorum possimus voluptate esse voluptatibus,
					aliquid ratione facere enim eveniet modi necessitatibus quas
					asperiores pariatur, amet velit?
				</p>
			</div>
		</div>
	);
};

export default Cart;