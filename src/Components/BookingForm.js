import { useState, useContext, useMemo } from 'react';
import { GlobalLoginContext } from '../Components/GlobalStateContext';
import { useForm } from 'react-hook-form';
import FormFieldOption from '../Components/FormFieldOption';
import { Link } from 'react-router-dom';

/* Once a true API call is available for availability, update or remove getDates, getTimes, etc. and use useEffect */
// This class has too many debugging logs still left in it
// It can be a good idea depending on complexity to move your server interactions into a separate layer, so `onSubmit`
// wouldn't call the server, it would call that client and keeps the specifics of the server interaction out of
// your component

const BookingForm = ({availableDateTime, setAvailableDateTime, user}) => {
	const context = useContext(GlobalLoginContext);
    const [times, setTimes] = useState([]);
    const [submitted, isSubmitted] = useState(false);

	const {
		control,
        register,
		handleSubmit,
        getValues,
		formState: { errors }
	} = useForm();

    // let dates = [];
    let content;

    // this is unnecessary - can be memoized or just referenced based on the current selection.
    // also there are much shorter/simpler ways to copy an array -- https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
    // Arrays.from() or .slice() are both good and clear in your intent

  // Maybe try this instead
  let dates = useMemo(() => {
    return availableDateTime.map((it) => it.date);
  }, [availableDateTime]);

  function getDates(){
        for (let i=0; i < availableDateTime.length; i++) {
            dates.push(availableDateTime[i].date)
        }
    }

    // I don't think this is necessary -- you can just reference availableDateTime[index].times directly, times is redundant state. Or you can useMemo if you really want.
    function initializeTimes( index ){
        if(index) {
            // console.log(index);
            // console.log("availableDateTime -> ", JSON.stringify(availableDateTime));
            // console.log("availableDateTime[index] -> ", JSON.stringify(availableDateTime[index]));
            // console.log("availableDateTime[index].times -> ", JSON.stringify(availableDateTime[index].times));

            setTimes(availableDateTime[index].times);
        }
    }

    // I don't think this is how you want to do this update. This is the challenge you can get into with modifying nested state in react.
  // you don't want to be pushing and splicing on the values directly.
    function updateTimes() {

    // I haven't run this but I think something like this would be better.
      let selectedDateIndex = getValues("date");
      let selectedTimeIndex = getValues("time");
      setAvailableDateTime(
        availableDateTime.map((dateEntry, dateIndex) => {
          return {
            date: dateEntry.date,
            times: dateEntry.times.filter((timeEntry, timeIndex) => {
              return (timeIndex !== selectedTimeIndex && dateIndex !== selectedDateIndex)
            })
          }
        })
      )


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

      // your indentation here is off which is confusing. Not a bad habit to have the IDE auto-lint everything on commit
		const result = {
            date: (availableDateTime[e.date].date).toLocaleDateString("en-US"),
            time: (availableDateTime[e.date].times[e.time] + " PM"),
            number: e.number,
            occasion: e.occasion
        }
        // again, don't push to the array in state, set a new array
        let bookings = context.myReservations;
        bookings.push(result);
        context.setMyReservations(bookings);
        updateTimes(e.date, e.time);
        isSubmitted(true);


	};

    // why is this a separate method instead of just `content =`?
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
                      {
                        // my code editor says "default" is not allowed here
                         }
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