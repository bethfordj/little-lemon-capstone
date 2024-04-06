import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalLoginContext } from '../Components/GlobalStateContext';
import { Controller, useForm } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import FormFieldOption from '../Components/FormFieldOption';

const BookingPage = () => {
	const context = useContext(GlobalLoginContext);
	const {
		control,
        register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const goTo = useNavigate();
    const dates = [
        {
            value: new Date("April 10, 2024"),
            text: "Tuesday, 04/10/2024"
        },
        {
            value: new Date("April 11, 2024"),
            text: "Wednesday, 04/11/2024"
        },
        {
            value: new Date("April 12, 2024"),
            text: "Thursday, 04/12/2024"
        },
        {
            value: new Date("April 13, 2024"),
            text: "Friday, 04/13/2024"
        },
        {
            value: new Date("April 14, 2024"),
            text: "Saturday, 04/14/2024"
        },
        {
            value: new Date("April 15, 2024"),
            text: "Sunday, 04/15/2024"
        }
    ]
    const times = [
        {
            value: "19:00:00",
            text: "7:00 PM"
        },
        {
            value: "21:30:00",
            text: "9:30 PM"
        },
        {
            value: "22:00:00",
            text: "10:00 PM"
        },
        {
            value: "22:30:00",
            text: "10:30 PM"
        }
    ]

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
			<form className="booking-form__container" onSubmit={handleSubmit(onSubmit)}>
                <div className="form__field-group">
					<label htmlFor='date'>Available Dates: </label>
					{errors.date && (
						<p className="form__error-message">{errors.date.message}</p>
					)}
					
                    <select {...register("date", {
							required: "A date is required.",
							minLength: {
								value: 1,
								message: "A date is required."
							  }
						})}>
                        <option value="" default>Select a date.</option>
                        {(dates).map(date => {return <FormFieldOption value={date.value} text={date.text}/> })}
                    </select>
				</div>
                <div className="form__field-group">
					<label htmlFor='time'>Available Times: </label>
					{errors.date && (
						<p className="form__error-message">{errors.date.message}</p>
					)}
					
                    <select {...register("time", {
							required: "A time is required.",
							minLength: {
								value: 1,
								message: "A time is required."
							  }
						})}>
                        <option value="" default>Select a time.</option>
                        {(times).map(time => {return <FormFieldOption value={time.value} text={time.text}/> })}
                    </select>
				</div>
                
				<div className="form__field-group">
					<label htmlFor='number'>Number of Guests: </label>
					{errors.number && (
						<p className="form__error-message">{errors.number.message}</p>
					)}
					<input
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
					{errors.date && (
						<p className="form__error-message">{errors.occasion.message}</p>
					)}
					
                    <select {...register("occasion")}>
                    <option value="" default>What is the gathering for?</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="birthday">Birthday</option>
                        <option value="graduation">Graduation</option>
                        <option value="justBecause">Just Because</option>
                    </select>
				</div>
				<button type="submit" className={`booking-form__submit-button button`}>Submit Reservation</button>
			</form>
		</article>
	);
};

export default BookingPage;