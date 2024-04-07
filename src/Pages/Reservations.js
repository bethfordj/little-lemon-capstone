import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import ButtonLink from '../Components/ButtonLink';

const Reservations = () => {
	const today = new Date().format('D/MM/YYYY');
	const defaultTimes = ["6:00","6:30","7:00","7:30","8:00","8:30","9:00","9:30","10:00","10:30"];
	const [availableDateTime, setAvailableDateTime] = useState(
		[
			{ date: today, times: defaultTimes },
			{ date: new Date(today.getDate() + 1), times: defaultTimes },
			{ date: new Date(today.getDate() + 2), times: defaultTimes },
			{ date: new Date(today.getDate() + 3), times: defaultTimes },
			{ date: new Date(today.getDate() + 4), times: defaultTimes },
			{ date: new Date(today.getDate() + 5), times: defaultTimes },
			{ date: new Date(today.getDate() + 6), times: defaultTimes }
		]
	);
	const navigate = useNavigate();
	return (
		<article className={`container reservations`}>
                <Helmet>
				    <title>Reservations</title>
				    <description>Reserve a table at a specific date and time</description>
			    </Helmet>
			    <div className="title-container">
				    <h1 className="title-container__title">Reservations</h1>
				    <p className="title-container__subtitle">Book a table or check a reservation!</p>
			    </div>
			    <div className="reservation-container">
				    <ButtonLink availableDateTime={availableDateTime} setAvailableDateTime={setAvailableDateTime} className={`reservation-container__book-btn button`} to="/reservations/book">Book a Table</ButtonLink>
			    </div>
		</article>
	);
};

export default Reservations;