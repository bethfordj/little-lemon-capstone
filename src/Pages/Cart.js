import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Cart = () => {
	const navigate = useNavigate();
	return (
		<div className={`container cart`}>
			<Helmet>
                <title>Cart</title>
				<description>See what's in your cart.</description>
            </Helmet>
			<div className="title">
				<h1>My Cart</h1>
			</div>
			<div className="cart-container">
				Cart component to go here
			</div>
		</div>
	);
};

export default Cart;