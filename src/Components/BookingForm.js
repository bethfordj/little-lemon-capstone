import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { GlobalLoginContext } from '../Components/GlobalStateContext';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import FormFieldOption from '../Components/FormFieldOption';

const BookingForm = ({availableDateTime, setAvailableDateTime, user}) => {
	const context = useContext(GlobalLoginContext);
    const [hasDate, setHasDate] = useState(false);
    const [times, setTimes] = useState([]);
    const goTo = useNavigate();
	const {
		control,
        register,
		handleSubmit,
        watch,
        getValues,
		formState: { errors }
	} = useForm();
	
    let dates = [];
    let availability = availableDateTime;
    let index;

    function getDates(){
        for (let i=0; i < availableDateTime.length; i++) {
            dates.push(availableDateTime[i].date)
        }
    }
    function getTimes( index ){
        if(index) {
            console.log(index);
            console.log("availability -> ", JSON.stringify(availableDateTime));
            console.log("availability[index] -> ", JSON.stringify(availableDateTime[index]));
            console.log("availability[index].times -> ", JSON.stringify(availability[index].times));
            setTimes(availability[index].times);
            //availability.splice(index,1);
        }
    }

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
    getDates(availableDateTime);
    if(hasDate) {
        getTimes(getValues("date"));
    }

	return (
		
			<form className={`booking-form__container form-container`} onSubmit={handleSubmit(onSubmit)}>
                <div className="form__field-group">
					<label className="required" htmlFor='date'>Available Dates: </label>
					{errors.date && (
						<p className="form__error-message">{errors.date.message}</p>
					)}
					
                    <select 
                        {...register("date", {
							required: "A date is required.",
							minLength: {
								value: 1,
								message: "A date is required."
							  }
						})}
                        >
                        <option value="" default>Select a date.</option>
                        {(dates).map((date,index) => {return <FormFieldOption value={index} text={date.toDateString()}/> })}
                    </select>
				</div>
                <div className="form__field-group">
					<label className="required" htmlFor='time'>Available Times: </label>
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
                        { (times.length > 0) ? (times).map(time => {return <FormFieldOption value={time} text={`${time} PM`}/> }) : <option disabled value="" default>You must select a date first.</option> }
                    </select>
				</div>
                
				<div className="form__field-group">
					<label className="required" htmlFor='number'>Number of Guests: </label>
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
				<button type="submit" className={`booking-form__submit-button submit-button button`}>Submit Reservation</button>
			</form>
	);
};

export default BookingForm;