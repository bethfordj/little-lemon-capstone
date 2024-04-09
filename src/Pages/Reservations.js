
import { useContext } from 'react';
import { GlobalLoginContext } from '../Components/GlobalStateContext';
import { Helmet } from 'react-helmet';
import ButtonLink from '../Components/ButtonLink';
import ReservationCards from '../Components/ReservationCards';

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
				{ (cardContent.reservations.length > 0) ? <ReservationCards {...cardContent} /> : <p className="no-reservations">You have no upcoming reservations at this time.</p>}
		</article>
	);
};

export default Reservations;