import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const OrderOnline = () => {
	const navigate = useNavigate();
	return (
		<article className={`container order-online`}>
			<Helmet>
				<title>Order Online</title>
				<description>Place an order for pickup.</description>
			</Helmet>
			<div className="title">
				<h1>Place an Order Online</h1>
			</div>
			<div className="order-container">
				Menu with order component
			</div>
		</article>
	);
};

export default OrderOnline;