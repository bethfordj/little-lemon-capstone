import { useEffect } from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import { GlobalLoginContext } from '../Components/GlobalStateContext';


const Login = (props) => {
	const context = useContext(GlobalLoginContext);

	const goTo = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmed, setConfirmed] = useState(false);
    const [activeBtn, setActiveBtn] = useState(false);
	const [user, setUser] = useState("");


	const handleSubmit = async e => {
		e.preventDefault();
        if(activeBtn) {

            /* Add server connection here once set up to add the user to the database and get their login token */

            const result = {
			    firstName: "Bob",
			    lastName: "Terra"
		    }
		    context.setName(result.firstName);
		    context.setLoginState(true);
		    goTo({ to: "/my-account"});
        }
        else {
            
        }
	};

	let content = (<></>);

	function checkPassword(confirmedPassword) {
        if(password && password == confirmedPassword) {
            setConfirmed(true);
        }
    };

	function checkLogin() {
		if (context.loginState) {
			goTo({ to: "/my-account"});
		}
		else {
			content = (
				<article  className={`container create-account`}>
					<div className="title">
						<h1>Create Account</h1>
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
                            name="password"
							type="password" 
							value={props.password} 
							placeholder="Enter your password here." 
							onChange={(event) => setPassword(event.target.value)} 
						/>
						<label htmlFor="password">Password: </label>
						<input
                            name="confirmation"
							type="password" 
							value={props.password} 
							placeholder="Confirm your password here." 
							onChange={(event) => checkPassword(event.target.value)} 
						/>
						<button  type="submit" className={`login__submit-button button`} onClick={handleSubmit}>Login</button>
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

export default Login;