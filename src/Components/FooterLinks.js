import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalLoginContext } from '../Components/GlobalStateContext';
import MainLinks from './MainLinks';

const FooterLinks = () => {
	const context = useContext(GlobalLoginContext);
	let content = (<></>);

	function logout() {
		context.setLoginState(false);
	};

	if( context.loginState ) {
		content = (
			<ul className="menu-links__wrapper">
				<MainLinks />
				<li>
					<NavLink className="my-account__link" to="/my-account">My Account</NavLink>
                </li>
                <li>
					<NavLink className={`cart nav__hover-state-links`} to="/order-online/my-cart">My Cart</NavLink>
                </li>
                <li>
					<a onClick={logout} className={`logout nav__hover-state-links`} href="#">Logout</a>
				</li>
			</ul>
		);
	}
	else {
		content = (
			<ul className="menu-links__wrapper">
				<MainLinks />
				<li>
					<NavLink to="/login">Login</NavLink>
				</li>
			</ul>
		)
	}

	return <>{content}</>
};

export default FooterLinks;