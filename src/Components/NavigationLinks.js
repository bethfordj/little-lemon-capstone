import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalLoginContext } from '../Components/GlobalStateContext';

const NavigationLinks = () => {
	const context = useContext(GlobalLoginContext);
	let content = (<></>);

	function logout() {
		context.setLoginState(false);
		
	};

	if(context.loginState) {
		content = (
			<li className="account-hover">
				<NavLink className="my-account__link" to="/my-account">My Account</NavLink>
				<NavLink className={`cart nav__hover-state-links`} to="/cart">Cart</NavLink>
				<a onClick={logout} className={`logout nav__hover-state-links`} href="#">Logout</a>
			</li>
		);
	}
	else {
		content = (
			<li>
				<NavLink to="/login">Login</NavLink>
			</li>
		);
	}

	return (
				<ul className="menu-links__wrapper">
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						<NavLink to="/menu">Menu</NavLink>
					</li>
					<li>
						<NavLink to="/reservations">Reservations</NavLink>
					</li>
					<li>
						<NavLink to="/order-online">Order Online</NavLink>
					</li>
					{content}
				</ul>
	);
};

export default NavigationLinks;