import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { useContext } from 'react';
import { GlobalLoginContext } from '../Components/GlobalStateContext';
import BookingForm from '../Components/BookingForm';

const BookingPage = (props) => {
	const context = useContext(GlobalLoginContext);
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

	const goTo = useNavigate();

    const onSubmit = async e => {
        console.log("e -> ",e);
        console.log("JSON.stringify(e) -> ",JSON.stringify(e));
		/* Add server connection here to make booking here and remove hardcoded result once set up */
        
		const result = {
            "date": "Sat Apr 13 2024 00:00:00 GMT-0400 (Eastern Daylight Time)",
            "time": "21:30:00",
            "number": "4",
            "occasion": "justBecause"
        }
		context.setName(result.firstName);
		context.setLoginState(true);
        goTo("/reservations", { replace: true });
	};

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