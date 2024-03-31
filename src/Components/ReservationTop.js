import React from 'react';
import { Helmet } from 'react-helmet';
import ButtonLink from './ButtonLink';

const ReservationTop = () => {
	return (
			<>
                <Helmet>
				    <title>Reservations</title>
				    <description>Reserve a table at a specific date and time</description>
			    </Helmet>
			    <div className="title-container">
				    <h1 className="title-container__title">Reservations</h1>
				    <p className="title-container__subtitle">Book a table or check a reservation!</p>
			    </div>
			    <div className="reservation-container">
				    <ButtonLink  className={`reservation-container__book-btn button`} to="/reservations/book">Book a Table</ButtonLink>
				    <ButtonLink  className={`reservation-container__check-btn button`} to="/reservations/check">Check a Booking</ButtonLink>
			    </div>
            </>
	);
};

export default ReservationTop;