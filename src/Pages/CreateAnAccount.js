import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import { GlobalLoginContext } from '../Components/GlobalStateContext';
import { useForm } from 'react-hook-form';


const CreateAnAccount = (props) => {
	const context = useContext(GlobalLoginContext);
    const {
		register,
		handleSubmit,
        watch,
		formState: { errors }
	} = useForm();
	const goTo = useNavigate();

	const onSubmit = async e => {

        /* Add server connection here once set up to add the user to the database and get their login token */

        const result = {
			firstName: "Bob",
			lastName: "Terra"
		}
		context.setName(result.firstName);
		context.setLoginState(true);
		goTo("/my-account", { replace: true });
	};

	let content = (<></>);

	function checkLogin() {
		if (context.loginState) {
			goTo({ to: "/my-account"});
		}
		else {
			content = (
                <article  className={`container create-account`}>
                    <Helmet>
                        <title>Create Account</title>
                        <description>Create an account with Little Lemon Restaurant.</description>
                    </Helmet>
                    <div className="title">
                        <h1>Create Account</h1>
                    </div>
                    <form className={`create-account-form__container form-container`} onSubmit={handleSubmit(onSubmit)}>
                    
                        <div className="form__field-group">
                            <label className="required" htmlFor='username'>Username: </label>
                            {errors.username && (
                                <p className="form__error-message">{errors.username.message}</p>
                            )}
                            <input
                                aria-required="true" 
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
                            <label className="required" htmlFor="password">Password: </label>
                            {errors.password && (
                                <p className="form__error-message">{errors.password.message}</p>
                            )}
                            <input
                                aria-required="true" 
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
                        <div className="form__field-group">
                            <label className="required" htmlFor="passwordConfirmation">Confirm Password: </label>
                            {errors.password && (
                                <p className="form__error-message">{errors.password.message}</p>
                            )}
                            <input
                                aria-required="true" 
                                type="password" 
                                name="passwordConfirmation"
                                placeholder="Enter your password again here." 
                                {...register("passwordConfirmation", {
                                    required: "Password confirmation is required.",
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 8 characters long."
                                    },
                                    validate: (value) => {
                                        /* This validation prevents form submission but does not yet show an error message */
                                        return value === watch('password') || 'Password does not match'
                                    }
                                })}
                            />
                        </div>
                        <button type="submit" className={`create-account__submit-button submit-button button`}>Create Account</button>
                    </form>
                </article>
			);
		}
	}

	checkLogin(context.loginState,props.destination);
	return (
		<>
			{content}
		</>
	);
};

export default CreateAnAccount;