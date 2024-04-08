import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { GlobalLoginContext } from '../Components/GlobalStateContext';
import { useForm } from 'react-hook-form';
import FormFieldOption from '../Components/FormFieldOption';
import { Link } from 'react-router-dom';

/* Once a true API call is available for availability, update or remove getDates, getTimes, etc. and use useEffect */

const BookingForm = ({availableDateTime, setAvailableDateTime, user}) => {
	const context = useContext(GlobalLoginContext);
    const [times, setTimes] = useState([]);;
    const [submitted, isSubmitted] = useState(false);
    const goTo = useNavigate();
	const {
		control,
        register,
		handleSubmit,
        getValues,
		formState: { errors }
	} = useForm();
	
    let dates = [];
    let content;

    function getDates(){
        for (let i=0; i < availableDateTime.length; i++) {
            dates.push(availableDateTime[i].date)
        }
    }
    function initializeTimes( index ){
        if(index) {
            // console.log(index);
            // console.log("availableDateTime -> ", JSON.stringify(availableDateTime));
            // console.log("availableDateTime[index] -> ", JSON.stringify(availableDateTime[index]));
            // console.log("availableDateTime[index].times -> ", JSON.stringify(availableDateTime[index].times));
            setTimes(availableDateTime[index].times);
        }
    }
    function updateTimes() {
        console.log("availableDateTime Before -> ", JSON.stringify(availableDateTime));
        let availability = [];
        for (let i = 0; i < availableDateTime.length; i++) {
            if(i == getValues("date")) {
                let selectedDate = availableDateTime[i];
                (selectedDate.times).splice(getValues("time"),1);
                availability.push(selectedDate);
                console.log("IF!!!!")
            }
            else {
                availability.push(availableDateTime[i]);
            }
        }
        setAvailableDateTime(availability);
        console.log("availableDateTime After -> ", JSON.stringify(availableDateTime));
    }

    const onSubmit = async e => {
        console.log("e -> ",e);
        console.log("JSON.stringify(e) -> ",JSON.stringify(e));
		/* Add server connection here to make booking here and remove hardcoded/global result once set up */

		const result = {
            date: (availableDateTime[e.date].date).toLocaleDateString("en-US"), 
            time: (availableDateTime[e.date].times[e.time] + " PM"), 
            number: e.number, 
            occasion: e.occasion
        }
        let bookings = context.myReservations;
        bookings.push(result);
        context.setMyReservations(bookings);
        updateTimes();
        isSubmitted(true);
        
		
       // goTo("/reservations", { replace: true });
	};
    function setContent() {
        if(!submitted) {
            content = (
                <form data-testid="bookingForm" className={`booking-form__container form-container`} onSubmit={handleSubmit(onSubmit)}>
                <div className="form__field-group">
					<label className="required" htmlFor='date'>Available Dates: </label>
					{errors.date && (
						<p data-testid="dateError" className="form__error-message">{errors.date.message}</p>
					)}
					
                    <select 
                        data-testid="dateSelect"
                        key="dateSelectField"
                        aria-required="true" 
                        {...register("date", {
							required: "A date is required.",
							minLength: {
								value: 1,
								message: "A date is required."
							  }
						})}
                        onBlur={() => { initializeTimes(getValues("date")) }}
                        >
                        <option key="selectDate" value="" default>Select a date.</option>
                        {(dates).map((date,index) => {return <FormFieldOption optionKey={(date.toDateString()).replaceAll(' ', '-')} value={index} text={date.toDateString()}/> })}
                    </select>
				</div>
                <div className="form__field-group">
					<label className="required" htmlFor='time'>Available Times: </label>
					{errors.date && (
						<p className="form__error-message">{errors.date.message}</p>
					)}
					
                    <select 
                        data-testid="timeSelect"
                        key="timeSelectField" 
                        aria-required="true" 
                        {...register("time", {
							required: "A time is required.",
							minLength: {
								value: 1,
								message: "A time is required."
							  }
						})}
                        >
                        <option key="selectTime" value="" default>Select a time.</option>
                        { (times.length > 0) ? (times).map(( time, index ) => {return <FormFieldOption optionKey={getValues("date").concat((time).replaceAll(' ', '-'))}value={index} text={`${time} PM`}/> }) : <option key="selectDateFirst" disabled value="" default>You must select a date first.</option> }
                    </select>
				</div>
                
				<div className="form__field-group">
					<label className="required" htmlFor='number'>Number of Guests: </label>
					{errors.number && (
						<p className="form__error-message">{errors.number.message}</p>
					)}
					<input
                        aria-required="true" 
						type="number" 
						name="number"
						placeholder="Enter a number."
						{...register("number", {
							required: "Number of guests is required.",
							min: {
								value: 1,
								message: "Number of guests cannot be less than 1."
							},
                            max: {
                                value: 10,
                                message: "Reservations for more than 10 guests cannot be completed online. Please, call (111)111-1111."
                            }
						})}
					/>
				</div>
                <div className="form__field-group">
					<label htmlFor='occasion'>Occasion: </label>
                    <select {...register("occasion")}>
                    <option value="" default>What is the gathering for?</option>
                        <option key="anniversary" value="anniversary">Anniversary</option>
                        <option key="birthday" value="birthday">Birthday</option>
                        <option key="graduation" value="graduation">Graduation</option>
                        <option key="justBecause" value="justBecause">Just Because</option>
                    </select>
				</div>
				<button type="submit" data-testid="submitBtn" className={`booking-form__submit-button submit-button button`}>Submit Reservation</button>
			</form>
            )
        }
        else {
            content = (
                <p className="booking-confirmation">Thank you for your booking! Return to <Link to="/reservations">Reservations</Link> to see what you have scheduled.</p>
            )
        }
    }
    getDates(availableDateTime);
    setContent();
	return (
        <>
            {content}	
        </>
	);
};

export default BookingForm;