import React from 'react';
import Card from './Card';


const ReservationCards = (props) => {

        return (
            <section className="reservation-cards">
                <div className="reservation-cards__card-row">
                  {
                    // Think you want a key here, too. Also maybe more than one line ;-)
                  }
                    { (props.reservations) ? (props.reservations).map((reservation) => {return <Card title={`${reservation.occasion} ${reservation.date}`} description={`Reservation for ${reservation.number} people at ${reservation.time}`}/>}): <p className="no-reservations">You have no reservations booked at this time.</p>}
                </div>
            </section>
        )
};

export default ReservationCards;