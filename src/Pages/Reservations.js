import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import ButtonLink from '../Components/ButtonLink';
import ReservationCards from '../Components/ReservationCards';
import { useContext } from 'react';
import { GlobalLoginContext } from '../Components/GlobalStateContext';

const Reservations = () => {
	const context = useContext(GlobalLoginContext);
	const cardContent = {
		reservations: context.myReservations
	}

	return (
		<article className={`container reservations`}>
                <Helmet>
				    <title>Reservations</title>
				    <description>Reserve a table at a specific date and time</description>
			    </Helmet>
			    <div className="title-container__row">
				    <h1 className="title-container__title">Reservations</h1>
					<ButtonLink  className={`reservation-cards__button booking-button button`} to="/reservations/book">Book a Table</ButtonLink>
			    </div>
				<ReservationCards {...cardContent} />
		</article>
	);
};

export default Reservations;