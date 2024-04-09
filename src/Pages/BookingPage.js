import { Helmet } from 'react-helmet';
import { useState } from 'react';
import BookingForm from '../Components/BookingForm';

const BookingPage = () => {
    const today = new Date();
	const defaultTimes = ["6:00","6:30","7:00","7:30","8:00","8:30","9:00","9:30","10:00","10:30"];
	const [availableDateTime, setAvailableDateTime] = useState(
		[
			{ date: today, times: defaultTimes },
			{ date: new Date(new Date().getTime() + 24 * 60 * 60 * 1000), times: defaultTimes },
			{ date: new Date(new Date().getTime() + 48 * 60 * 60 * 1000), times: defaultTimes },
			{ date: new Date(new Date().getTime() + 72 * 60 * 60 * 1000), times: defaultTimes },
			{ date: new Date(new Date().getTime() + 96 * 60 * 60 * 1000), times: defaultTimes },
			{ date: new Date(new Date().getTime() + 120 * 60 * 60 * 1000), times: defaultTimes },
			{ date: new Date(new Date().getTime() + 144 * 60 * 60 * 1000), times: defaultTimes }
		]
	);

	return (
		<article className={`container book-reservation`}>
			<Helmet>
				<title>Book a Reservation</title>
				<description>Schedule a table for a specific date and time.</description>
			</Helmet>
			<div className="title">
				<h1>Book a Reservation</h1>
			</div>
			<BookingForm availableDateTime={availableDateTime} setAvailableDateTime={setAvailableDateTime} />
		</article>
	);
};

export default BookingPage;