import { useNavigate } from 'react-router-dom';
import ReservationTop from '../Components/ReservationTop';

const BookingPage = () => {
	const navigate = useNavigate();
	return (
		<article className={`container reservations`}>
			<ReservationTop />
		</article>
	);
};

export default BookingPage;