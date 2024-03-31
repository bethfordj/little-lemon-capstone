import { useEffect } from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const Login = (props) => {

	const goTo = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [user, setUser] = useState("");

	function forwardUser(destination, isLoggedIn) {
		if (destination.length > 0) {
			goTo({ to: {destination}, data: { isLoggedIn: {isLoggedIn}, username: {username} }});
		}
		else {
			goTo({ to: "" , data: { isLoggedIn: {isLoggedIn}, username: {username} }});
		}
	}

	const handleSubmit = async e => {
		e.preventDefault();
		setUser({
			username: {username},
			password: {password}
		});

		/* Add server connection here once set up */

		localStorage.setItem("isLoggedIn",true);
		
		
	};

	var loginContent = (<></>);
	

	function checkLogin(isLoggedIn,destination) {
		if (isLoggedIn && destination.length > 0) {
			goTo({ to: {destination}});
		}
		else if (isLoggedIn) {
			loginContent = (
				<article  className={`container login`}>
					<Helmet>
						<title>Your Account</title>
						<description>You have already logged in, so we are showing your account.</description>
					</Helmet>
					<div className="title">
						<h1>You Are Already Logged In</h1>
						<p>What do you want to do?</p>
					</div>
				</article>
			);
		}
		else {
			loginContent = (
				<article  className={`container login`}>
					<div className="title">
						<h1>Login</h1>
					</div>
					<form className="login-container" onSubmit={handleSubmit}>
						<label htmlFor='username'>Username: </label>
						<input
							type="text" 
							value={props.username} 
							placeholder="Enter your username here." 
							onChange={(event) => setUsername(event.target.value)} 
						/>
						<label htmlFor="password">Password: </label>
						<input
							type="password" 
							value={props.password} 
							placeholder="Enter your password here." 
							onChange={(event) => setPassword(event.target.value)} 
						/>
						<button  type="submit" className={`login__submit-button button`} onClick={handleSubmit}>Login</button>
					</form>
				</article>
			);
			
		}

	}

	checkLogin(props.isLoggedIn,props.destination);
	return (
		<>
			{loginContent}
		</>
	);
};

export default Login;