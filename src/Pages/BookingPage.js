import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalLoginContext } from '../Components/GlobalStateContext';
import { Controller, useForm } from 'react-hook-form'
import DatePicker from 'react-datepicker'

const BookingPage = () => {
	const context = useContext(GlobalLoginContext);
	const {
		control,
        register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const goTo = useNavigate();

    const onSubmit = async e => {

		/* Add server connection here and remove hardcoded result once set up */

		const result = {
			firstName: "Alice",
			lastName: "Waters"
		}
		context.setName(result.firstName);
		context.setLoginState(true);
	};

	return (
		<article className={`container book-reservation`}>
			<Helmet>
				<title>Login</title>
				<description>Login to see your account, order online, or make a reservation.</description>
			</Helmet>
			<div className="title">
				<h1>Login</h1>
			</div>
			<form className="login-form__container" onSubmit={handleSubmit(onSubmit)}>
                <div className="form__field-group">
					<label htmlFor='date'>Date of Reservation: </label>
					{errors.date && (
						<p className="form__error-message">{errors.date.message}</p>
					)}
					<Controller
                        control={control}
                        name='date'
                        render={({ field }) => (
                        <DatePicker
                            placeholderText='Select date'
                            onChange={(date) => field.onChange(date)}
                            selected={field.value}
                        />
                    )}
                    />
				</div>
				<div className="form__field-group">
					<label htmlFor='username'>Username: </label>
					{errors.username && (
						<p className="form__error-message">{errors.username.message}</p>
					)}
					<input
						type="text" 
						name="username"
						placeholder="Enter your username here." 
						{...register("username", {
							required: "Username is required.",
							minLength: {
								value: 5,
								message: "Username must be at least 5 characters long."
							  }
						})}
					/>
				</div>
				<div className="form__field-group">
					<label htmlFor="password">Password: </label>
					{errors.password && (
						<p className="form__error-message">{errors.password.message}</p>
					)}
					<input
						type="password" 
						name="password"
						placeholder="Enter your password here." 
						{...register("password", {
							required: "Password is required.",
							minLength: {
								value: 8,
								message: "Password must be at least 8 characters long."
							  }
						})}
					/>
				</div>
				<button type="submit" className={`login__submit-button button`}>Login</button>
			</form>
		</article>
	);
};

export default BookingPage;