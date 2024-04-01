import { useEffect } from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalLoginContext } from '../Components/GlobalStateContext';


const Login = (props) => {
	const context = useContext(GlobalLoginContext);

	const goTo = useNavigate();
    const [passwordReady, setPasswordReady] = useState(true);
    const [usernameReady, setUsernameReady] = useState(true);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [user, setUser] = useState("");

	function forwardUser(destination) {
		if (destination && destination.length > 0) {
			goTo({ to: {destination}});
		}
		else {
			goTo({ to: "/my-account"});
		}
	}

	const handleSubmit = async e => {
		e.preventDefault();

		/* Add server connection here and remove hardcoded result once set up */
		const result = {
			firstName: "Alice",
			lastName: "Waters"
		}
		context.setName(result.firstName);
		context.setLoginState(true);
		forwardUser(props.destination);
	};

	var loginContent = (<></>);
	function validatePassword(value) {
		if(value.length >= 8) {
			setPasswordReady(true);
		}
		else {
			setPasswordReady(false);
		}
	};
	function validateUsername(value) {
		if(value.length > 5) {
			setUsernameReady(true);
		}
		else {
			setUsernameReady(false);
		}

	};
	function checkLogin(isLoggedIn,destination) {
		if (isLoggedIn && destination && destination.length > 0) {
			goTo({ to: {destination}});
		}
		else if (isLoggedIn) {
			goTo({ to: "/my-account"});
		}
		else {
			loginContent = (
				<article  className={`container login`}>
					<Helmet>
                        <title>Login</title>
                        <description>Login to see your account, order online, or make a reservation.</description>
                    </Helmet>
					<div className="title">
						<h1>Login</h1>
					</div>
					<form className="login-container" onSubmit={handleSubmit}>
						{!usernameReady && <span className="form-alert">Username is required</span>}
						<label htmlFor='username'>Username: </label>
						<input
							type="text" 
							value={props.username} 
							placeholder="Enter your username here." 
							onChange={(event) => setUsername(event.target.value)} 
							onBlur={(event) => validateUsername(event.target.value)} 
						/>
						{!passwordReady && <span className="form-alert">Password is required</span>}
						<label htmlFor="password">Password: </label>
						<input
							type="password" 
							value={props.password} 
							placeholder="Enter your password here." 
							onChange={(event) => setPassword(event.target.value)} 
							onBlur={(event) => validatePassword(event.target.value)} 
						/>
						<button disabled={(passwordReady && usernameReady)} type="submit" className={`login__submit-button button`} onClick={handleSubmit}>Login</button>
					</form>
					<div>
                        <p className="no-account-message">
                            Need to <NavLink to="/create-account">creat an account</NavLink>?
                        </p>
                    </div>
				</article>
			);
			
		}

	}

	checkLogin(context.loginState,props.destination);
	return (
		<>
			{loginContent}
		</>
	);
};

export default Login;