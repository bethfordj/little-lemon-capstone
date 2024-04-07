import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { GlobalLoginContext } from '../Components/GlobalStateContext';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import FormFieldOption from '../Components/FormFieldOption';

const BookingForm = ({availableDateTime, setAvailableDateTime, user}) => {
	const context = useContext(GlobalLoginContext);
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

    function getDates(){
        for (let i=0; i < availableDateTime.length; i++) {
            dates.push(availableDateTime[i].date)
        }
    }
    function getTimes( index ){
        if(index) {
            console.log(index);
            console.log("availableDateTime -> ", JSON.stringify(availableDateTime));
            console.log("availableDateTime[index] -> ", JSON.stringify(availableDateTime[index]));
            console.log("availableDateTime[index].times -> ", JSON.stringify(availableDateTime[index].times));
            setTimes(availableDateTime[index].times);
        }
    }
    function handleAvailability() {
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
		/* Add server connection here to make booking here and remove hardcoded result once set up */
        
		const result = {
            "date": "Sat Apr 13 2024 00:00:00 GMT-0400 (Eastern Daylight Time)",
            "time": "21:30:00",
            "number": "4",
            "occasion": "justBecause"
        }
        handleAvailability()
		context.setName(result.firstName);
		context.setLoginState(true);
       // goTo("/reservations", { replace: true });
	};
    getDates(availableDateTime);

	return (
		
			<form className={`booking-form__container form-container`} onSubmit={handleSubmit(onSubmit)}>
                <div className="form__field-group">
					<label className="required" htmlFor='date'>Available Dates: </label>
					{errors.date && (
						<p className="form__error-message">{errors.date.message}</p>
					)}
					
                    <select key="dateSelectField"
                        {...register("date", {
							required: "A date is required.",
							minLength: {
								value: 1,
								message: "A date is required."
							  }
						})}
                        onBlur={() => { getTimes(getValues("date")) }}
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
					
                    <select key="timeSelectField" {...register("time", {
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
                        <option key="anniversary" value="anniversary">Anniversary</option>
                        <option key="birthday" value="birthday">Birthday</option>
                        <option key="graduation" value="graduation">Graduation</option>
                        <option key="justBecause" value="justBecause">Just Because</option>
                    </select>
				</div>
				<button type="submit" className={`booking-form__submit-button submit-button button`}>Submit Reservation</button>
			</form>
	);
};

export default BookingForm;